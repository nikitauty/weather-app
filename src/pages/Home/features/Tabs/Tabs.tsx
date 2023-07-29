import styles from '@/pages/Home/features/Tabs/Tabs.module.scss';

import { Group } from './Group/Group';

export const Tabs = () => {
	return (
		<>
			<div className={styles.tabs}>
				<div className={`${styles.tab} ${styles.active}`}>На неделю</div>
				<div className={styles.tab}>На месяц</div>
				<div className={styles.tab}>На 10 дней</div>
			</div>
			<Group />
		</>
	);
};
