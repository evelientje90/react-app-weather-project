import React from  "react";
import "./Weather.css";
export default function Weather() {
    return (
        <div classNme="Weather">
            <h1>Amsterdam</h1>
            <ul>
                <li>Sunday 21:00</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="Sunny"/>
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Wind: 13km/h</li>
                        <li>Humidity: 35%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}