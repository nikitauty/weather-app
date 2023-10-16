import { createContext, FunctionComponent, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export interface ICityProvider {
	city: string;
	setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const CityContext = createContext<ICityProvider | null>(null);

export const CityContextProvider: FunctionComponent<Props> = ({ children }) => {
	const [city, setCity] = useState('Saint Petersburg');

	return (
		<CityContext.Provider value={{ city, setCity }}>
			{children}
		</CityContext.Provider>
	);
};
