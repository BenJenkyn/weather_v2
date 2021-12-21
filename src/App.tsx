import React, { useState } from "react";
import { Container, Flex, Grid } from "@chakra-ui/react";
import CityInput from "./components/CityInput";
import TemperatureDisplay from "./components/TemperatureDisplay";
import { WeatherResponse } from "./api";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();

  return (
    <div className="App">
      <Container maxWidth="container.lg" padding="10px">
        <Flex flexDir="column" gridGap="10px">
          <CityInput
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
          <Grid columnGap="50px" rowGap="10px">
            <TemperatureDisplay weatherData={weatherData} />
          </Grid>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
