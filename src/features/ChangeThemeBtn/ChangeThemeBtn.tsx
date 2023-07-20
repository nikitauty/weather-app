import styles from '@/features/ChangeThemeBtn/ChangeThemeBtn.module.scss';
import {
	ColorThemeContext,
	IThemeContext,
} from '@/services/Contexts/ColorThemeContext/ColorThemeContext';
import lightTheme from '@/shared/assets/invert_colors.svg';
import { useContext } from 'react';
import { themes } from '@/services/Contexts/ColorThemeContext/themes';

export const ChangeThemeBtn = () => {
	const theme = useContext<IThemeContext | null>(ColorThemeContext);

	return (
		<button
			className={styles.theme}
			onClick={() => {
				if (theme?.theme?.color === '#000') {
					theme.setTheme(themes.dark);
				} else {
					theme?.setTheme(themes.light);
				}
			}}
		>
			<img src={lightTheme} alt="theme" />
		</button>
	);
};
