import { Header } from '@/components/Header/Header';
import { useContext } from 'react';
import { ColorThemeContext } from '@/services/Contexts/ColorThemeContext/ColorThemeContext';

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
				<main className="main">
					<h1>Hello</h1>
					<h3>First deploy</h3>
				</main>
			</div>
			<footer className="footer">this is footer</footer>
		</div>
	);
};
