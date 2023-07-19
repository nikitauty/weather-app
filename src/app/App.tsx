import { Header } from '@/components/Header/Header';

export const App = () => {
	return (
		<>
			<Header />
			<div>
				<main className="main">
					<h1>Hello</h1>
					<h3>First deploy</h3>
				</main>
			</div>
			<footer className="footer">this is footer</footer>
		</>
	);
};
