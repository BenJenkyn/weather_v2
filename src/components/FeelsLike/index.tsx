import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';

import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getTemperature } from '../../lib/tempConversions';
import { WeatherResponse } from '../../api';

interface FeelsLikeProps {
	weatherData?: WeatherResponse;
}

const FeelsLike = (props: FeelsLikeProps) => {
	const { weatherData } = props;
	return (
		<WeatherInfoBox>
			<Flex flexDirection='column' alignItems='center'>
				<Text flex='2' fontSize='64'>
					{weatherData ? `${getTemperature(weatherData.main.feels_like).toFixed(1)}°C` : '--'}
				</Text>
				<Text flex='1' fontSize={24}>
					Feels Like
				</Text>
			</Flex>
		</WeatherInfoBox>
	);
};

export default FeelsLike;
