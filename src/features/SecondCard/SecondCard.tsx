import styles from '@/features/SecondCard/SecondCard.module.scss';
import temp from '@/shared/assets/temp.svg';
import presure from '@/shared/assets/pressure.svg';
import precipitation from '@/shared/assets/precipitation.svg';
import wind from '@/shared/assets/wind.svg';

export const SecondCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
                <img src={temp} alt="" className={styles.card__info_img}/>
                <span>Температура</span>
                <span></span>
            </div>
			<div className={styles.card__info}>
                <img src={presure} alt="" className={styles.image}/>
                <span>Давление</span>
                <span></span>
            </div>
			<div className={styles.card__info}>
                <img src={precipitation} alt="" className={styles.image}/>
                <span>Осадки</span>
                <span></span>
            </div>
			<div className={styles.card__info}>
                <img src={wind} alt="" className={styles.image}/>
                <span>Ветер</span>
                <span></span>
            </div>
		</div>
	);
};
