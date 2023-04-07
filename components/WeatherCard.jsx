import Image from "next/image";

const WeatherCard = ({ data }) => {
  return (
    <>
      <div className="m-2 p-4">
        <div className="grid grid-cols-2 place-items-center md:w-[80%] lg:w-[50%] mx-auto">
          <div className="text-center">
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="image"
              width={100}
              height={100}
            />
            <p className="text-white text-xl">{data.weather[0].main}</p>
          </div>
          <div className="text-5xl text-white">
            <p className="text-5xl tex-white">{data.main.temp.toFixed(0)} &#176;F</p>
          </div>
        </div>
        <div className="mt-10 bg-black/50 p-4 md:w-[80%] lg:w-[50%] mx-auto rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl text-white">Weather in {data.name}</h2>
          </div>
          <div className="grid grid-cols-3 place-items-center text-white mt-4">
            <div className="text-center">
              <p>{data.main.feels_like.toFixed(0)} &#176;</p>
              <p>Feels Like</p>
            </div>
            <div className="text-center">
              <p>{data.main.humidity.toFixed(0)}%</p>
              <p>Humidity</p>
            </div>
            <div className="text-center">
              <p>{data.wind.speed.toFixed(0)}MPH</p>
              <p>Winds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
