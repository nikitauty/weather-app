import { Header } from '@/components/Header/Header';
import { useContext } from 'react';
import { ColorThemeContext } from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import { MainSection } from '@/components/MainSection/MainSection';

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
			<MainSection />
			<footer className="footer">this is footer</footer>
		</div>
	);
};
