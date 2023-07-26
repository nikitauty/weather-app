import { IDay } from '@/shared/types/IDay';
import styles from '@/ui/BottomCard/BottomCard.module.scss';
import { FunctionComponent } from 'react';
import sun from '@/shared/assets/sun.svg';
import rain from '@/shared/assets/rain.svg';
import small_rain_sun from '@/shared/assets/small_rain_sun.svg';
import small_rain from '@/shared/assets/small_rain.svg';
import mainly_cloudy from '@/shared/assets/mainly_cloudy.svg';

interface Props {
	day: IDay;
}

export const BottomCard: FunctionComponent<Props> = ({ day }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__day}>{day.day}</div>
			<div className={styles.card__date}>{day.date}</div>
			<div className={styles.card__iconId}>
				<img src={day.iconId} alt='icon' />
			</div>
			<div className={styles.card__dayTemp}>{day.dayTemp}</div>
			<div className={styles.card__nightTemp}>{day.nightTemp}</div>
			<div className={styles.card__description}>{day.description}</div>
		</div>
	);
};
