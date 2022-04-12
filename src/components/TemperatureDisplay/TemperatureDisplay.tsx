import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

import { useAppSelector } from '../../redux/hooks';
import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getTemperature } from '../../lib/tempConversions';
import { WeatherBoxProps } from '../../lib/WeatherInfoBoxProps';

const TemperatureDisplay = (props: WeatherBoxProps) => {
	const { tempType } = props;
	const weatherData = useAppSelector((state) => state.weather.weatherData);

	return (
		<WeatherInfoBox isDouble>
			<Flex>
				<Box flex="1">
					<Text fontSize="90" textAlign="center">
						{weatherData && 'main' in weatherData
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
						{weatherData && 'main' in weatherData
							? `${getTemperature(weatherData?.main.temp_min, tempType).toFixed(
									1
							  )}°`
							: '--'}
					</Text>
					<Text>
						High:{' '}
						{weatherData && 'main' in weatherData
							? `${getTemperature(weatherData?.main.temp_max, tempType).toFixed(
									1
							  )}°`
							: '--'}
					</Text>
					<Text>
						{weatherData && 'main' in weatherData
							? weatherData?.weather[0].main
							: '--'}
					</Text>
				</Box>
			</Flex>
		</WeatherInfoBox>
	);
};

export default TemperatureDisplay;
