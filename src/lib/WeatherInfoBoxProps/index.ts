import { WeatherResponse } from "../../api";
import { measurementUnit } from "../tempConversions";

export interface WeatherBoxProps {
	weatherData?: WeatherResponse;
    tempType: measurementUnit;
}