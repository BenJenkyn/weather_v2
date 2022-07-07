// export type measurementUnit = 'celcius' | 'farenheit';
export enum measurementUnit {
	celcius = 'celcius',
	farenheit = 'farenheit',
}

export const toCelcius = (tempKalvin: number): number => {
	const celcius = tempKalvin - 273.15;
	return celcius;
};

export const toFarenheit = (tempKalvin: number): number => {
	const celcius = toCelcius(tempKalvin);
	const farenheit = celcius * (9 / 5) + 32;
	return farenheit;
};

export const getTemperature = (
	tempKalvin: number,
	tempMeasurement: measurementUnit = measurementUnit.celcius
): number => {
	if (tempMeasurement === 'celcius') {
		return toCelcius(tempKalvin);
	}
	if (tempMeasurement === 'farenheit') {
		return toFarenheit(tempKalvin);
	}
	return -10000;
};
