import { useCity } from '@/hooks/useCity';
import styles from '@/pages/Home/features/MainCard/MainCard.module.scss';
import weather from '@/shared/assets/sun.svg';

export const MainCard = () => {
	const date = new Date();
	const city = useCity();

	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<div className={styles.card__info_main}>
					<h1 className={styles.temp}>20°</h1>
					<span className={styles.day}>Сегодня</span>
				</div>
				<img src={weather} alt='' className={styles.card__info_img} />
			</div>
			<div className={styles.card__description}>
				<span className={styles.time}>
					Время: {date.getHours()}:
					{date.getMinutes() > 10
						? date.getMinutes()
						: '0' + date.getMinutes().toString()}
				</span>
				<br />
				<span className={styles.city}>Город: {city?.city}</span>
			</div>
		</div>
	);
};
