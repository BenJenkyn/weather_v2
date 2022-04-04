import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getTemperature } from '../../lib/tempConversions';
import { WeatherBoxProps } from '../../lib/WeatherInfoBoxProps';

const TemperatureDisplay = (props: WeatherBoxProps) => {
	const { weatherData, tempType } = props;
	return (
		<WeatherInfoBox isDouble>
			<Flex>
				<Box flex="1">
					<Text fontSize="90" textAlign="center">
						{weatherData
							? `${getTemperature(weatherData?.main.temp, tempType).toFixed(1)}`
							: '--'}
					</Text>
					<Text fontSize="24" textAlign="center">
						&deg;{tempType === 'celcius' ? 'C' : 'F'}
					</Text>
				</Box>
				<Box flex="1" fontSize="24" margin="auto">
					<Text>
						Low:{' '}
						{weatherData
							? `${getTemperature(weatherData?.main.temp_min, tempType).toFixed(
									1
							  )}°`
							: '--'}
					</Text>
					<Text>
						High:{' '}
						{weatherData
							? `${getTemperature(weatherData?.main.temp_max, tempType).toFixed(
									1
							  )}°`
							: '--'}
					</Text>
					<Text>{weatherData ? weatherData?.weather[0].main : '--'}</Text>
				</Box>
			</Flex>
		</WeatherInfoBox>
	);
};

export default TemperatureDisplay;
