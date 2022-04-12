import React from 'react';
import { Image, Text, Flex, Box } from '@chakra-ui/react';
import _ from 'lodash';

import { useAppSelector } from '../../redux/hooks';
import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getWeatherImgUrl } from '../../api';
import { WeatherBoxProps } from '../../lib/WeatherInfoBoxProps';

const DetailedWeather = (props: WeatherBoxProps) => {
	const weatherData = useAppSelector((state) => state.weather.weatherData);

	return (
		<WeatherInfoBox>
			<Flex alignContent="center" flexDirection="column" alignItems="center">
				{weatherData && 'weather' in weatherData && (
					<>
						<Box flex={2}>
							<Image
								src={getWeatherImgUrl(weatherData!.weather[0].icon)}
								alt={weatherData?.weather[0].description}
								width={150}
								height={150}
							/>
						</Box>
					</>
				)}
				<Text flex={1} fontSize="24">
					{weatherData && 'weather' in weatherData
						? weatherData?.weather[0].description
						: '--'}
				</Text>
			</Flex>
		</WeatherInfoBox>
	);
};

export default DetailedWeather;
