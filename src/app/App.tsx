import { ColorThemeContext } from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import { Router } from '@/services/Router/Router';
import { useContext } from 'react';

export const App = () => {
	const theme = useContext(ColorThemeContext);

	return (
		<div
			style={{
				backgroundColor: theme?.theme?.main,
				color: theme?.theme?.color,
			}}
		>
			<Router />
		</div>
	);
};
