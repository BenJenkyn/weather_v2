import React from 'react';
import { GridItem } from '@chakra-ui/react';

interface WeatherInfoBoxProps {
	isDouble?: boolean;
	children: JSX.Element;
}

const WeatherInfoBox = (props: WeatherInfoBoxProps) => {
	const { isDouble } = props;
	return (
		<GridItem
			maxWidth={isDouble ? ['450px', '1000px'] : ['1000px', '1000px', '200px']}
			minWidth="200px"
			height="200px"
			padding="10px"
			borderRadius="15px"
			colSpan={isDouble ? [4, 4, 2] : [4, 4, 1]}
			backgroundColor="#486581"
		>
			{props.children}
		</GridItem>
	);
};

export default WeatherInfoBox;
