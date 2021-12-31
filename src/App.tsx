import React, { useState } from 'react';
import { Container, Grid } from '@chakra-ui/react';

import CityInput from './components/CityInput';
import TemperatureDisplay from './components/TemperatureDisplay';
import DetailedWeather from './components/DetailedWeather';
import FeelsLike from './components/FeelsLike';
import { WeatherResponse } from './api';
import { measurementUnit } from './lib/tempConversions';
import './app.css';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [tempType, setTempType] = useState<measurementUnit>('celcius');

  return (
    <div className="App">
      <Container maxWidth="container.lg" padding="10px">
        <Grid
          columnGap={['5px', '5px', '50px']}
          rowGap={['5px', '5px', '10px']}
          templateColumns="repeat(4, 1fr)"
        >
          <CityInput
            weatherData={weatherData}
            setWeatherData={setWeatherData}
            setTempType={setTempType}
            tempType={tempType}
          />
          <TemperatureDisplay
            weatherData={weatherData}
            tempType={tempType}
          />
          <DetailedWeather
            weatherData={weatherData}
            tempType={tempType}
          />
          <FeelsLike
            weatherData={weatherData}
            tempType={tempType}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
