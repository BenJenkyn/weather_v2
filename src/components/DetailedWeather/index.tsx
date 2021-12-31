import React from 'react';
import { Image, Text, Flex, Box } from '@chakra-ui/react';

import WeatherInfoBox from '../../lib/WeatherInfoBox';
import { getWeatherImgUrl } from '../../api';
import { WeatherBoxProps } from '../../lib/WeatherInfoBoxProps';

const DetailedWeather = (props: WeatherBoxProps) => {
	const { weatherData } = props;
	return (
		<WeatherInfoBox>
			<Flex alignContent='center' flexDirection='column' alignItems='center'>
				{weatherData && (
					<Box flex={2}>
						<Image
							src={getWeatherImgUrl(weatherData?.weather[0].icon)}
							alt={weatherData.weather[0].description}
							width={150}
							height={150}
						/>
					</Box>
				)}
				<Text flex={1} fontSize='24'>
					{weatherData ? weatherData?.weather[0].description : '--'}
				</Text>
			</Flex>
		</WeatherInfoBox>
	);
};

export default DetailedWeather;
