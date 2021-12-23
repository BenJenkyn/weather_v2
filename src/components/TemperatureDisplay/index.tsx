import React from 'react';
import { GridItem, Flex, Text, Box } from '@chakra-ui/react';
import { WeatherResponse } from '../../api';
import { getTemperature } from '../lib/tempConversions';

interface Props {
  weatherData?: WeatherResponse;
}

const TemperatureDisplay = (props: Props) => {
  const { weatherData } = props;
  return (
    <GridItem
      maxWidth="450px"
      height="200px"
      padding="10px"
      borderColor="red"
      borderWidth="2px"
      borderRadius="15px"
    >
      <Flex>
        <Box flex="1">
          <Text fontSize="100" textAlign="center">
            {weatherData
              ? `${getTemperature(weatherData?.main.temp).toFixed(1)}`
              : '--'}
          </Text>
          <Text fontSize="25" textAlign="center">
            &deg;C
          </Text>
        </Box>
        <Box flex="1" fontSize="24" margin="auto" textColor="#4a4a4a">
          <Text>
            Low:{' '}
            {weatherData
              ? `${getTemperature(weatherData?.main.temp_min).toFixed(1)}`
              : '--'}
          </Text>
          <Text>
            High:{' '}
            {weatherData
              ? `${getTemperature(weatherData?.main.temp_max).toFixed(1)}`
              : '--'}
          </Text>
          <Text>{weatherData ? weatherData?.weather[0].main : '--'}</Text>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default TemperatureDisplay;
