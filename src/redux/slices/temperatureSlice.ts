import { createSlice } from '@reduxjs/toolkit';
import { measurementUnit } from '../../lib/tempConversions';

interface State {
	temperatureType: measurementUnit;
}

const initialState: State = {
	temperatureType: measurementUnit.celcius,
};

export const temperatureSlice = createSlice({
	name: 'temperature',
	initialState,
	reducers: {
		setTemperatureType(
			state: State,
			action: { type: string; payload: measurementUnit }
		) {
			state.temperatureType = action.payload;
		},
	},
});

export const { setTemperatureType } = temperatureSlice.actions;

export default temperatureSlice.reducer;
