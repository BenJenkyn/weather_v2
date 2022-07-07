import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi, WeatherResponse } from '../../api';

type WeatherState = WeatherResponse | {};

interface State {
	weatherData: WeatherState;
	isLoading: boolean;
	city: string;
	errorMessage: string;
}

// Defining state
const initialState: State = {
	weatherData: {},
	isLoading: false,
	city: '',
	errorMessage: '',
};

export const getWeatherData = createAsyncThunk(
	'weather/getWeather',
	async (city: string) => {
		try {
			const weatherData = await weatherApi(city);
			return weatherData;
		} catch (err) {
			console.log('blah');
			throw err;
		}
	}
);

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setCity(state, action) {
			state.city = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.pending, (state) => {
				state.isLoading = true;
				state.errorMessage = '';
			})
			.addCase(getWeatherData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.weatherData = action.payload;
				console.log('success');
			})
			.addCase(getWeatherData.rejected, (state) => {
				state.isLoading = false;
				state.errorMessage = 'invalid city name';
				console.log('error');
			});
	},
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;
