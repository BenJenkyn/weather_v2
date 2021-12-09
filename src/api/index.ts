import dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.WEATHER_API_KEY;

export interface WeatherResponse {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}                         

                        

export const weatherApi = async (city: string): Promise<WeatherResponse | null> => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const weatherResponse = await fetch(url)
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
    catch(e: any){
        console.error('Error fetching weather: ', e);
        return null;
    }
}