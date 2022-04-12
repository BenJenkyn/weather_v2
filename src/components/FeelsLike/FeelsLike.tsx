import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getTemperature } from '../../lib/tempConversions';
import { WeatherBoxProps } from '../../lib/WeatherInfoBoxProps';
import { useAppSelector } from '../../redux/hooks';

const FeelsLike = (props: WeatherBoxProps) => {
	const { tempType } = props;
	const weatherData = useAppSelector((state) => state.weather.weatherData);

	return (
		<WeatherInfoBox>
			<Flex flexDirection="column" alignItems="center">
				<Text flex="2" fontSize="80">
					{weatherData && 'main' in weatherData
						? `${getTemperature(weatherData.main.feels_like, tempType).toFixed(
								1
						  )}°`
						: '--'}
				</Text>
				<Text flex="1" fontSize={24}>
					Feels Like
				</Text>
			</Flex>
		</WeatherInfoBox>
	);
};

export default FeelsLike;
