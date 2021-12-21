import React, { useState } from "react";
import { weatherApi, WeatherResponse } from "../../api";
import {
  Button,
  Center,
  Container,
  Input,
  Spinner,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

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

const toCelcius = (tempKalvin: number): number => {
  const celcius = tempKalvin - 273.15;
  return celcius;
};

const toFarenheit = (tempKalvin: number): number => {
  const celcius = toCelcius(tempKalvin);
  const farenheit = celcius * (9 / 5) + 32;
  return farenheit;
};

const CityInput = (props: Props) => {
  const { weatherData, setWeatherData } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    <Container border="gray" borderStyle="solid" borderRadius="15" padding="3">
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
          ? `The weather is: ${toCelcius(weatherData.main.temp).toFixed(
              1
            )} Celcius 
            and ${toFarenheit(weatherData.main.temp).toFixed(
              1
            )} Farenheit in ${city}`
          : ""}
      </Text>
    </Container>
  );
};

export default CityInput;
