import React, {useState} from "react";

const api = {
    key: 'ed0253c30516958bfb03baf7cb991acb',
    base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherComponent(){

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        console.log("Search pressed");
        console.log(search)

        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setWeather(result);
            });
    };
    return(
        <div className="App bg-dark">
                <header className="App-header">
                    {/* Header for the app */}
                    <img alt="" src="../../../images/weather.png"
                         className="wd-weather-app-pic"/>
                    <h5>Weather App</h5>
                    <div>
                            {/* Search Bar*/}
                            <input type="text"
                                   placeholder="Enter city name"
                                   onChange={(e) => setSearch(e.target.value)}
                            />
                        <div>
                            <br/>
                    <button onClick={searchPressed}> Search</button> </div>
                    </div>
                    {/*Location*/}
                    {typeof weather.main !== "undefined" ? (
                        <div>
                    <p>City: {weather.name}</p>
                            {/*Temperature F/C */}
                    <p>Temperature {weather.main.temp} C</p>
                    {/*Condition*/}
                            <p>Weather Conditions:</p>
                            <p>{weather.weather[0].main}</p>
                            <p>({weather.weather[0].description})</p>
                        </div>
                                                           ):("")}
                </header>
        </div>
    );
}
export default WeatherComponent;