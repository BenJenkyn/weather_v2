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
            setTempType={setTempType}
            tempType={tempType}
          />
          <TemperatureDisplay
            tempType={tempType}
          />
          <DetailedWeather
            tempType={tempType}
          />
          <FeelsLike
            tempType={tempType}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
