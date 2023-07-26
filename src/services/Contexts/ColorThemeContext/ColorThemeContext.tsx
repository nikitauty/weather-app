import { FunctionComponent, createContext, useState } from 'react';

import { themes } from './themes';

interface ColorThemeContextProviderProps {
	children: React.ReactNode;
}

export interface ITheme {
	light: {
		main: string;
		color: string;
		citySelectBg: string;
	};
	dark: {
		main: string;
		color: string;
		citySelectBg: string;
	};
}

export interface IThemeContext {
	theme: ITheme['light'] | ITheme['dark'] | null;
	setTheme: React.Dispatch<React.SetStateAction<ITheme['light'] | ITheme['dark'] | null>>;
}

export const ColorThemeContext = createContext<IThemeContext | null>(null);

export const ColorThemeContextProvider: FunctionComponent<ColorThemeContextProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ITheme['light'] | ITheme['dark'] | null>(themes.light);

	return (
		<ColorThemeContext.Provider value={{ theme, setTheme }}>{children}</ColorThemeContext.Provider>
	);
};
