import { Station } from "../components/Station";
import React, {useState} from "react";
import {IDENTIFIER, STATION_URL, STATUS_URL} from "../constants/apiHandling";
import "./StationContainer.css";

interface APIStation {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

interface APIStatus {
  is_installed: number;
  is_renting: number;
  num_bikes_available: number;
  num_docks_available: number;
  last_reported: number;
  is_returning: number;
  station_id: string;
}

/**
 * Displays a list of Stations, including that station's current status.
 * @var apiStations is a list of stations fetched from the API
 * @var apiStatuses is a list of the status of the different stations
 */

export const StationContainer = () => {
  const [apiStations, setApiStations] = useState<APIStation[]>([]);
  const [apiStatuses, setApiStatuses] = useState<APIStatus[]>([]);

  //Fetches the stations from the API
  fetch(STATION_URL, {
    method: "GET",
    headers: { "Client-Identifier": IDENTIFIER },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      setApiStations(data.data.stations);
    })
    .catch((e) => console.log(e));

  //Fetches the statuses from the API
  fetch(STATUS_URL, {
    method: "GET",
    headers: { "Client-Identifier": IDENTIFIER },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      setApiStatuses(data.data.stations);
    })
    .catch((e) => console.log(e));

  return (
    <div id={"station-container"}>
      {apiStations.map((station: APIStation) => {
        let status: APIStatus | undefined = apiStatuses.find(
          (a) => a.station_id === station.station_id
        );

        if (status === undefined) return null;

        return (
          <Station
            station_id={station.station_id}
            name={station.name}
            address={station.address}
            num_bikes_available={status.num_bikes_available}
            num_docks_available={status.num_docks_available}
          />
        );
      })}
    </div>
  );
}
