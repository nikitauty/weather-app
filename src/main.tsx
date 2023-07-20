import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ColorThemeContextProvider } from './services/Contexts/ColorThemeContext/ColorThemeContext';
import { CityContextProvider } from './services/Contexts/CityContext/CityContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ColorThemeContextProvider>
			<CityContextProvider>
				<App />
			</CityContextProvider>
		</ColorThemeContextProvider>
	</React.StrictMode>,
);
