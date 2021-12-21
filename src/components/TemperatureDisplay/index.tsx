import React from "react";
import { GridItem, Text } from "@chakra-ui/react";
import { WeatherResponse } from "../../api";
import { getTemperature } from "../lib/tempConversions";

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
      <Text>
        {weatherData ?  `The weather is: ${getTemperature(weatherData?.main.temp).toFixed(1)}` : "--"}
      </Text>
    </GridItem>
  );
};

export default TemperatureDisplay;
