import { Home } from '@/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
	return (
		<Routes>
			<Route path="/">
				<Home />
			</Route>
		</Routes>
	);
};
