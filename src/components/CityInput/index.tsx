import React, { useEffect, useState } from "react";
import { weatherApi, WeatherResponse } from "../../api";
import {
  Button,
  Center,
  Container,
  Input,
  Spinner,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

const fetchWeatherData = async (city: string) => {
  const weather = await weatherApi(city);
  if (weather) {
    return weather;
  }
};

const CityInput = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [city, setCity] = useState<string>("");
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
        if (typeof res === "string") {
          setErrorMessage(res);
          setIsInvalid(true);
        } else {
          setWeatherData(res);
          setIsInvalid(false);
        }
      })
      .catch((err) => {
        console.error("trouble fetcing api", err);
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
    <Stack>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isInvalid}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={handleChange}
              className="city-input"
              placeholder="e.g. Toronto"
            />
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
        <Text>
          {weatherData && weatherData.weather
            ? weatherData.weather[0].icon
            : ""}
        </Text>
      </Container>
    </Stack>
  );
};

export default CityInput;
