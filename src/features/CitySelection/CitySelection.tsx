import styles from '@/features/CitySelection/CitySelection.module.scss';

export const CitySelection = () => {
	return (
		<select name="city" id={styles.city}>
			<option value="1">Moscow</option>
			<option value="2">Saint Petersburg</option>
			<option value="3">Cherepovets</option>
		</select>
	);
};
