import styles from '@/pages/Home/components/MainSection/MainSection.module.scss';
import { MainCard } from '@/pages/Home/features/MainCard/MainCard';
import { SecondCard } from '@/pages/Home/features/SecondCard/SecondCard';

export const MainSection = () => {
	return (
		<div className={styles.section}>
			<MainCard />
			<SecondCard />
		</div>
	);
};
