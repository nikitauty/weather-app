import { Theme } from '@/shared/types/enumTheme';
import { createContext } from 'react';

interface ITheme {
	theme: Theme;
	changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ITheme>({
	theme: Theme.LIGHT,
	changeTheme: () => {
		//do nothing
	},
});
