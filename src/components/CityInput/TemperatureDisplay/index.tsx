import { Container } from '@chakra-ui/react';
import React from 'react';
import {WeatherResponse} from '../../../api'

interface Props {
    weatherData?: WeatherResponse;
}

const TemperatureDisplay = (props: Props) => {
    const {weatherData} = props;
    return(
        <Container border="gray" borderStyle="solid" borderRadius="15" padding="3">
            {weatherData?.main.temp}
        </Container>
    )
}

export default TemperatureDisplay;