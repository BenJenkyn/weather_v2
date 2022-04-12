import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import temperatureReducer from './slices/temperatureSlice';

const store = configureStore({
	reducer: {
		weather: weatherReducer,
		temperature: temperatureReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
