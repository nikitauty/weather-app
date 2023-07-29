import styles from '@/pages/Home/features/SecondCard/SecondCard.module.scss';
import circle from '@/shared/assets/Ellipse 1.svg';
import precipitation from '@/shared/assets/precipitation.svg';
import presure from '@/shared/assets/pressure.svg';
import temp from '@/shared/assets/temp.svg';
import wind from '@/shared/assets/wind.svg';

export const SecondCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<div className={styles.card__info_img}>
					<img src={circle} alt='' className={styles.cir} />
					<img src={temp} alt='' className={styles.im} />
				</div>
				<span className={styles.card__info_header}>Температура</span>
				<span className={styles.card__info_span}>20° - ощущается как 17°</span>
			</div>
			<div className={styles.card__info}>
				<div className={styles.card__info_img}>
					<img src={circle} alt='' className={styles.cir} />
					<img src={presure} alt='' className={styles.im} />
				</div>
				<span className={styles.card__info_header}>Давление</span>
				<span className={styles.card__info_span}>
					765 мм ртутного столба - нормальное
				</span>
			</div>
			<div className={styles.card__info}>
				<div className={styles.card__info_img}>
					<img src={circle} alt='' className={styles.cir} />
					<img src={precipitation} alt='' className={styles.im} />
				</div>
				<span className={styles.card__info_header}>Осадки</span>
				<span className={styles.card__info_span}>Без осадков</span>
			</div>
			<div className={styles.card__info}>
				<div className={styles.card__info_img}>
					<img src={circle} alt='' className={styles.cir} />
					<img src={wind} alt='' className={styles.im} />
				</div>
				<span className={styles.card__info_header}>Ветер</span>
				<span className={styles.card__info_span}>
					3 м/с юго-запад - легкий ветер
				</span>
			</div>
		</div>
	);
};
