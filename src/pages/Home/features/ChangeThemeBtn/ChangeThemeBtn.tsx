import { useTheme } from '@/hooks/useTheme';
import styles from '@/pages/Home/features/ChangeThemeBtn/ChangeThemeBtn.module.scss';
import lightTheme from '@/shared/assets/invert_colors.svg';
import { Theme } from '@/shared/types/enumTheme';

export const ChangeThemeBtn = () => {
	const theme = useTheme();
	return (
		<button
			className={styles.theme}
			onClick={() => {
				theme.changeTheme(
					theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
				);
			}}
		>
			<img src={lightTheme} alt='theme' />
		</button>
	);
};
