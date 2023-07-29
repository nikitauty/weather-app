import { App } from '@/app/App';
import { CityContextProvider } from '@/services/Contexts/CityContext/CityContextProvider';
import { ThemeProvider } from '@/services/Providers/ThemeProvider';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<CityContextProvider>
					<App />
				</CityContextProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
