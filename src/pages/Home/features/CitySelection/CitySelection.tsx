/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ColorThemeContext } from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import { useContext } from 'react';
import Select from 'react-select';

export const CitySelection = () => {
	const theme = useContext(ColorThemeContext);

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: theme?.theme?.citySelectBg,
			color: theme?.theme?.color,
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			marginLeft: '20px',
			zIndex: '1',
		}),
		option: (styles: any) => ({
			...styles,
			backgroundColor: theme?.theme?.citySelectBg,
			color: theme?.theme?.color,
		}),
	};

	const options = [
		{ value: 'Msc', label: 'Moscow' },
		{ value: 'SPb', label: 'Saint Petersburg' },
		{ value: 'Kaz', label: 'Kazan' },
	];

	return <Select defaultValue={options[0]} options={options} styles={colourStyles} />;
};
