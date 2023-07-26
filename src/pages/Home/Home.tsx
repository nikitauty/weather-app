import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { Tabs } from './features/Tabs/Tabs';

export const Home = () => {
	return (
		<div className='container'>
			<Header />
			<MainSection />
			<Tabs />
		</div>
	);
};
