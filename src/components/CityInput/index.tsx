import React, { useEffect, useState } from "react";
import { weatherApi, WeatherResponse } from "../../api";
import {
  Button,
  Center,
  Container,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

const CityInput = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [city, setCity] = useState<string>();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weather = await weatherApi("toronto");
      if (weather) {
        setWeatherData(weather);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

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
        <form>
          <Text>City </Text>
          <Input type="text" value={city} className="city-input" placeholder='e.g. Toronto'/>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Stack>
  );
};

export default CityInput;
