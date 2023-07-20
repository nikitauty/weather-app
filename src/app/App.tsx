import { Header } from '@/components/Header/Header';
import { useContext } from 'react';
import { ColorThemeContext } from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import { MainCard } from '@/features/MainCard/MainCard';

export const App = () => {
	const theme = useContext(ColorThemeContext);

	return (
		<div
			style={{
				backgroundColor: theme?.theme?.main,
				color: theme?.theme?.color,
			}}
		>
			<Header />
			<div>
				<MainCard />
			</div>
			<footer className="footer">this is footer</footer>
		</div>
	);
};
