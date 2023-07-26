import { createContext, FunctionComponent, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

interface ICityProvider {
	city: string;
	setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const CityContext = createContext<ICityProvider | null>(null);

export const CityContextProvider: FunctionComponent<Props> = ({ children }) => {
	const [city, setCity] = useState('Sain Petersburg');

	return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};
