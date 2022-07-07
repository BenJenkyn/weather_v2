import React, { useState } from 'react';
import {
	Button,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Text,
	Flex,
	GridItem,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import { setCity, getWeatherData } from '../../redux/slices/weatherSlice';
import { setTemperatureType } from '../../redux/slices/temperatureSlice';
import { useAppSelector } from '../../redux/hooks';
import { measurementUnit } from '../../lib/tempConversions';

const CityInput = () => {
	const dispatch = useDispatch();

	const weatherData = useAppSelector((state) => state.weather.weatherData);
	const errorMessage = useAppSelector((state) => state.weather.errorMessage);
	const tempType = useAppSelector((state) => state.temperature.temperatureType);

	const [cityLocal, setCityLocal] = useState<string>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCityLocal(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(cityLocal);
		dispatch(setCity(cityLocal));
		if (cityLocal) {
			dispatch(getWeatherData(cityLocal));
		}
	};

	const changeTempType = () => {
		if (tempType === measurementUnit.celcius) {
			dispatch(setTemperatureType(measurementUnit.farenheit));
		} else if (tempType === measurementUnit.farenheit) {
			dispatch(setTemperatureType(measurementUnit.celcius));
		}
	};

	return (
		<GridItem
			maxWidth="1000px"
			height="200px"
			padding="10px"
			backgroundColor="#486581"
			borderRadius="15px"
			colSpan={4}
		>
			<form onSubmit={(e) => handleSubmit(e)}>
				<FormControl isInvalid={!_.isEmpty(errorMessage)}>
					<FormLabel>City</FormLabel>
					<Flex>
						<Button
							_hover={{
								backgroundColor: '#829ab1',
							}}
							backgroundColor="#334e68"
							textColor="white"
							textAlign="center"
							onClick={changeTempType}
							type="button"
						>
							{tempType === measurementUnit.celcius ? '°F' : '°C'}
						</Button>
						<Input
							onChange={handleChange}
							type="text"
							className="city-input"
							placeholder="e.g. Toronto"
							borderColor="#829ab1"
						/>
						<Button
							_hover={{
								backgroundColor: '#829ab1',
							}}
							backgroundColor="#334e68"
							textColor="white"
							type="submit"
						>
							Submit
						</Button>
					</Flex>
					<FormErrorMessage>{errorMessage}</FormErrorMessage>
				</FormControl>
			</form>
			<Text fontSize="55">
				{weatherData && 'name' in weatherData && weatherData.sys
					? `${weatherData.name}, ${weatherData.sys.country}`
					: ''}
			</Text>
		</GridItem>
	);
};

export default CityInput;
