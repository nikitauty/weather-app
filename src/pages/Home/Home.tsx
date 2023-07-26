import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';

export const Home = () => {
	return (
		<div className='container'>
			<Header />
			<MainSection />
			<footer className='footer'>this is footer</footer>
		</div>
	);
};
