import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { CityContextProvider } from './services/Contexts/CityContext/CityContextProvider';
import { ColorThemeContextProvider } from './services/Contexts/ColorThemeContext/ColorThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ColorThemeContextProvider>
				<CityContextProvider>
					<App />
				</CityContextProvider>
			</ColorThemeContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
