/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/shared/types/enumTheme';
import Select from 'react-select';

export const CitySelection = () => {
	const theme = useTheme();

	const options = [
		{ value: 'Msc', label: 'Moscow' },
		{ value: 'SPb', label: 'Saint Petersburg' },
		{ value: 'Kaz', label: 'Kazan' },
	];

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor:
				theme.theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			marginLeft: '20px',
			zIndex: '1',
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === Theme.LIGHT ? '#000' : '#fff',
		}),
	};

	return (
		<Select defaultValue={options[0]} options={options} styles={colourStyles} />
	);
};
