import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Loading from "./Loading";
import WeatherCard from "./WeatherCard";

const Display = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=746270b77edb4edf797c15055bc73257 `;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => setWeather(response.data));
    setCity("");
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="">
          <Head>
            <title>Weather - Next App</title>
          </Head>
        </div>
        <div className="realtive flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-atuo p-3 bg-transparent border border-gray-300 text-white rounded-2xl m-4"
          >
            <div className="">
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="bg-transparent border-none text-white focus:outline-none text-xl placeholder:text-white"
                placeholder="Search city"
              />
            </div>
            <button className="text-2xl" onClick={fetchWeather}>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        {weather.main && <WeatherCard data={weather} />}
      </>
    );
  }
};
export default Display;
