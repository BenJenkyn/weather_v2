import React, { useState } from 'react';
import { Container, Flex, Grid } from '@chakra-ui/react';

import CityInput from './components/CityInput';
import TemperatureDisplay from './components/TemperatureDisplay';
import DetailedWeather from './components/DetailedWeather';
import { WeatherResponse } from './api';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();

  return (
    <div className="App">
      <Container maxWidth="container.lg" padding="10px">
        <Grid columnGap="50px" rowGap="10px" templateColumns="repeat(4, 1fr)">
          <CityInput
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
          <TemperatureDisplay weatherData={weatherData} />
          <DetailedWeather weatherData={weatherData} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
