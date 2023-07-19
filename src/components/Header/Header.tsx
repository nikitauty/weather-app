import styles from '@/components/Header/Header.module.scss';
import logo from '@/shared/assets/Header logo.svg';
import theme from '@/shared/assets/invert_colors.svg';


export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
                <img src={logo} alt="logo" className="header__logo" />
                <span className={styles.logo__text}>react weather</span>
            </div>
            <div className={styles.themeCity}>
                <button className={styles.theme}><img src={theme} alt="theme" /></button>
                <select name="city" id={styles.city}>
                    <option value="1">Moscow</option>
                    <option value="2">Saint Petersburg</option>
                    <option value="3">Cherepovets</option>
                </select>
            </div>
		</header>
	);
};
