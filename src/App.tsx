import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import CityInput from "./components/CityInput";
import TemperatureDisplay from "./components/CityInput/TemperatureDisplay";
import { WeatherResponse } from "./api";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();

  return (
    <div className="App">
      <HStack>
        <CityInput weatherData={weatherData} setWeatherData={setWeatherData} />
        <TemperatureDisplay weatherData={weatherData} />
      </HStack>
    </div>
  );
}

export default App;
