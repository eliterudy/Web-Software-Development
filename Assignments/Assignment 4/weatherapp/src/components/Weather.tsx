import { CitySearchForm, CityWeatherDetail } from "./index";
import React, { useState, useEffect } from "react";
const Weather = () => {
  const [input, setInput] = useState<string>("");
  const [cityInfo, setCityInfo] = useState<null | any>(null);

  return (
    <div className="col col-12 pt-4 pt-sm-5   d-flex d-sm-block flex-column flex-grow-1 ">
      <h1 className="weather-title text-center">Weather App</h1>
      <div className="offset-0 offset-sm-3 offset-md-4 col-12 col-sm-6 col-md-4 mt-2  ">
        <CitySearchForm
          value={input}
          callback={(value: string) => setInput(value)}
        />
      </div>

      <div className="offset-0 offset-sm-3 offset-md-4 col-12 col-sm-6 col-md-4 mt-2 flex-grow-1 d-flex d-sm-block py-4">
        <CityWeatherDetail data={cityInfo} clearDataCallback={() => {}} />
      </div>
    </div>
  );
};

export default Weather;
