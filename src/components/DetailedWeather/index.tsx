import React from "react";
import { GridItem } from "@chakra-ui/react";

import { WeatherResponse } from '../../api'

interface DetailedWeatherProps {
    weatherData?: WeatherResponse;
}

const DetailedWeather = (props: DetailedWeatherProps) => {
    const {weatherData} = props;
    return(
        <GridItem
        maxWidth="200px"
        height="200px"
        padding="10px"
        borderColor="red"
        borderWidth="2px"
        borderRadius="15px"
        colSpan={1}
      >
          test
      </GridItem>
    );
}

export default DetailedWeather;