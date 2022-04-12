import React from 'react';
import { Container, Grid } from '@chakra-ui/react';

import CityInput from './components/CityInput';
import TemperatureDisplay from './components/TemperatureDisplay';
import DetailedWeather from './components/DetailedWeather';
import FeelsLike from './components/FeelsLike';
import './app.css';

function App() {
	return (
		<div className="App">
			<Container maxWidth="container.lg" padding="10px">
				<Grid
					columnGap={['5px', '5px', '50px']}
					rowGap={['5px', '5px', '10px']}
					templateColumns="repeat(4, 1fr)"
				>
					<CityInput />
					<TemperatureDisplay />
					<DetailedWeather />
					<FeelsLike />
				</Grid>
			</Container>
		</div>
	);
}

export default App;
