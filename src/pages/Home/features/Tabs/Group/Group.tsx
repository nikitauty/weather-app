import styles from '@/pages/Home/features/Tabs/Group/Group.module.scss';
import { IDay } from '@/shared/types/IDay';
import { BottomCard } from '@/ui/BottomCard/BottomCard';

export const Group = () => {
	const days: IDay[] = [
		{
			day: 'Сегодня',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
		{
			day: 'Завтра',
			date: '29 авг',
			iconId: 'small_rain_sun',
			dayTemp: '+15°',
			nightTemp: '+10°',
			description: 'Небольшой дождь',
		},
		{
			day: 'Пн',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
		{
			day: 'Вт',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
		{
			day: 'Ср',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
		{
			day: 'Чт',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
		{
			day: 'Пт',
			date: '28 авг',
			iconId: 'sun',
			dayTemp: '+18°',
			nightTemp: '+15°',
			description: 'Облачно',
		},
	];

	return (
		<div className={styles.group}>
			{days.map((day) => {
				return <BottomCard day={day} key={day.day} />;
			})}
		</div>
	);
};
