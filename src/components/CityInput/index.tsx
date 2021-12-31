import React, { useState } from 'react';
import {
  Button,
  Center,
  Input,
  Spinner,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
  GridItem,
} from '@chakra-ui/react';

import { weatherApi, WeatherResponse } from '../../api';

interface Props {
  weatherData?: WeatherResponse;
  setWeatherData: React.Dispatch<
    React.SetStateAction<WeatherResponse | undefined>
  >;
}

const fetchWeatherData = async (city: string) => {
  const weather = await weatherApi(city);
  if (weather) {
    return weather;
  }
};

const CityInput = (props: Props) => {
  const { weatherData, setWeatherData } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    fetchWeatherData(city)
      .then((res) => {
        if (typeof res === 'string') {
          setErrorMessage(res);
          setIsInvalid(true);
        } else {
          setWeatherData(res);
          setIsInvalid(false);
        }
      })
      .catch((err) => {
        console.error('trouble fetcing api', err);
      });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <GridItem
      maxWidth="1000px"
      height="200px"
      padding="10px"
      backgroundColor="#486581"
      borderRadius="15px"
      colSpan={4}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isInvalid}>
          <FormLabel>City</FormLabel>
          <Flex>
            <Input
              type="text"
              value={city}
              onChange={handleChange}
              className="city-input"
              placeholder="e.g. Toronto"
              borderColor="#829ab1"
            />
            <Button _hover={{
				backgroundColor: '#829ab1'
			}} backgroundColor="#334e68" textColor="white" type="submit">
              Submit
            </Button>
          </Flex>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </form>
      <Text fontSize="55">
        {weatherData && weatherData.name && weatherData.sys
          ? `${weatherData.name}, ${weatherData.sys.country}`
          : ''}
      </Text>
    </GridItem>
  );
};

export default CityInput;
