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
			maxWidth={isDouble ? '450px' : '200px'}
			height='200px'
			padding='10px'
			borderRadius='15px'
			colSpan={isDouble ? 2 : 1}
			backgroundColor='#A0ACEC'
		>
			{props.children}
		</GridItem>
	);
};

export default WeatherInfoBox;
