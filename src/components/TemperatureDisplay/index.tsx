import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { WeatherResponse } from '../../api';
import { getTemperature } from '../../lib/tempConversions';

interface Props {
	weatherData?: WeatherResponse;
}

const TemperatureDisplay = (props: Props) => {
	const { weatherData } = props;
	return (
		<WeatherInfoBox isDouble>
			<Flex>
				<Box flex='1'>
					<Text fontSize='90' textAlign='center'>
						{weatherData
							? `${getTemperature(weatherData?.main.temp).toFixed(1)}`
							: '--'}
					</Text>
					<Text fontSize='24' textAlign='center'>
						&deg;C
					</Text>
				</Box>
				<Box flex='1' fontSize='24' margin='auto'>
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
		</WeatherInfoBox>
	);
};

export default TemperatureDisplay;
