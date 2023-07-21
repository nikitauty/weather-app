import styles from '@/components/MainSection/MainSection.module.scss';
import { MainCard } from '@/features/MainCard/MainCard';
import { SecondCard } from '@/features/SecondCard/SecondCard';

export const MainSection = () => {
	return (
		<div className={styles.section}>
			<MainCard />
			<SecondCard />
		</div>
	);
};
