import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-sm-6 mb-5">
                    <h1>{props.data.city}</h1>
                </div>
                <div className="col-sm-6 mb-5">
                    <h2><FormattedDate date={props.data.date} /></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-sm">
                    <WeatherIcon className="" code={props.data.icon} size={52} />
                </div>
            </div>
        </div>
    </div>
  );
}