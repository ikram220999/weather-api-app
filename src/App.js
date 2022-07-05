import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  console.log("weather", weather);

  useEffect(() => {
    axios
      .get("https://community-open-weather-map.p.rapidapi.com/weather", {
        headers: {
          "X-RapidAPI-Key":
            "10c4a0be16msh2920711b82ec721p1a77e9jsnef61e8089183",
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        },
        params: {
          q: "London,uk",
          // lat: "0",
          // lon: "0",
          callback: "test",
          // id: "2172797",
          lang: "null",
          // units: "imperial",
          // mode: "json",
        },
      })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data, null, 4));
        setWeather(response.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <div className="bg-blue-400 py-3 px-5">
        <p className="text-md font-semibold text-white">Weather API</p>
      </div>

      <div className="flex flex-row mt-3 px-2">
        <input
          type="text"
          name="country"
          placeholder="Enter country"
          className="m-auto border-2 py-2 px-4 rounded-lg text-md md:w-full"
        ></input>
        <button className="bg-blue-500 text-white px-3 rounded-md text-sm">
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
