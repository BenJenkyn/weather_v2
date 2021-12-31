require('dotenv').config();

const apiKey = 'fbaa3d68a5a1505f1469d317c664dcac' //process.env.REACT_APP_WEATHER_API_KEY;

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

export const weatherApi = async (
	city: string
): Promise<WeatherResponse | string | null> => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

	const weatherResponse = await fetch(url);

	if (weatherResponse.ok) {
		const weatherData = await weatherResponse.json();
		return weatherData;
	}
	if (weatherResponse.status >= 500) {
		return 'Issue with the server. Please try again later';
	}
	return 'Invalid city name';
};

export const getWeatherImgUrl = (iconId: string): string => {
	const weatherImageUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
	return weatherImageUrl;
};
