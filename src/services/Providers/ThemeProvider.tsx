import { changeCSSRootVariables } from '@/model/ChangeCSSRootVariables';
import { storage } from '@/model/storage';
import { Theme } from '@/shared/types/enumTheme';
import { FC, ReactNode, useState } from 'react';

import { ThemeContext } from '../Contexts/ThemeContext/ThemeContext';

interface Props {
	children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children, ...props }) => {
	const [theme, setTheme] = useState<Theme>(
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		storage.getItem('theme') || Theme.LIGHT,
	);

	changeCSSRootVariables(theme);

	function changeTheme(theme: Theme) {
		storage.setItem('theme', theme);
		setTheme(theme);
		changeCSSRootVariables(theme);
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	);
};
