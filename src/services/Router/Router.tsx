import { Home } from '@/pages/Home/Home';
import { MonthStatistics } from '@/pages/MonthStatistics/MonthStatistics';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/stats' element={<MonthStatistics />}></Route>
		</Routes>
	);
};
