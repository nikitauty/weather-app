import styles from '@/pages/Home/features/ChangeThemeBtn/ChangeThemeBtn.module.scss';
import {
	ColorThemeContext,
	IThemeContext,
} from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import { themes } from '@/services/Contexts/ColorThemeContext/themes';
import lightTheme from '@/shared/assets/invert_colors.svg';
import { useCallback, useContext } from 'react';

export const ChangeThemeBtn = () => {
	const theme = useContext<IThemeContext | null>(ColorThemeContext);

	return (
		<button
			className={styles.theme}
			onClick={useCallback(() => {
				if (theme?.theme?.color === '#000') {
					theme.setTheme(themes.dark);
				} else {
					theme?.setTheme(themes.light);
				}
			}, [theme])}
		>
			<img src={lightTheme} alt='theme' />
		</button>
	);
};
