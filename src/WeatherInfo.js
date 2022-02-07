import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-sm-4 mb-5">
                    <h1>{props.data.city}</h1>
                </div>
                <div className="col-sm-8 mb-5">
                    <h2><FormattedDate date={props.data.date} /></h2>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-sm-4 ">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-sm-4">
                    <WeatherIcon className="" code={props.data.icon} size={52} />
                </div>
                <div className="col-sm-4">
                    <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}