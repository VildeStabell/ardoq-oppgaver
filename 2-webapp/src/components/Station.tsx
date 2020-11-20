import React from "react";
import "./Station.css";

interface StationInterface {
  station_id: string;
  name: string;
  address: string;
  num_bikes_available: number;
  num_docks_available: number;
}

/**
 * Displays a single station.
 * @param props contains the id, name, address,
 * capacity and availability of the station
 */

export const Station = (props: StationInterface) => {
  return (
    <div id={props.station_id} className={"station"} key={props.station_id}>
      <div className={"station-name-address"}>
        <h2>{props.name}</h2>
        <p>
          <i>{props.address}</i>
        </p>
      </div>
      <div className="availability">
        <p
          className={
            props.num_bikes_available === 0 ? "unavailable" : "available"
          }
        >
          Bikes available: {props.num_bikes_available}
        </p>
        <p
          className={
            props.num_docks_available === 0 ? "unavailable" : "available"
          }
        >
          Docks available: {props.num_docks_available}
        </p>
      </div>
    </div>
  );
};
