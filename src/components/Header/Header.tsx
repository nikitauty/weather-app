import { ChangeThemeBtn } from '@/features/ChangeThemeBtn/ChangeThemeBtn';
import { CitySelection } from '@/features/CitySelection/CitySelection';
import styles from '@/components/Header/Header.module.scss';
import logo from '@/shared/assets/Header logo.svg';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" className="header__logo" />
				<span className={styles.logo__text}>react weather</span>
			</div>
			<div className={styles.themeCity}>
				<ChangeThemeBtn />
				<CitySelection />
			</div>
		</header>
	);
};
