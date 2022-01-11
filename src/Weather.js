import React, {useState} from  "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ready: false});
	function handleResponse(response){
		setWeatherData({
			ready:true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
			wind: response.data.wind.speed,
			city: response.data.name
		});
	}

	if (weatherData.ready) {
	return (
        <div className="Weather">
					<WeatherInfo data={weatherData} />
            <form>
                <div className="row">
                <div className="col-9">
                    <input 
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoFocus="on"
                    />
                </div>
                <div className="col-3">
                    <input 
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
        </div>
    );
} else {
	const apiKey = "2ef9e61eec221d1bd1943b5909229927";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

	return "Loading...";}
}
