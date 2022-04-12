require('dotenv').config();

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export interface WeatherResponse {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		message: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export const weatherApi = async (city: string): Promise<WeatherResponse> => {
	try {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

		const weatherResponse = await fetch(url);

		if (weatherResponse.ok) {
			const weatherData = await weatherResponse.json();
			return weatherData;
		}
		throw new Error(weatherResponse.statusText);
	} catch (e) {
		console.error(e);
		throw e;
	}
};

export const getWeatherImgUrl = (iconId: string): string => {
	const weatherImageUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
	return weatherImageUrl;
};
