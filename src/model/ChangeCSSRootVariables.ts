import { Theme } from '@/shared/types/enumTheme';

export function changeCSSRootVariables(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement;

	const components = [
		'body-background',
		'component-background',
		'card-background',
		'card-shadow',
		'text-color',
	];

	components.forEach((component) => {
		root.style.setProperty(
			`--${component}-default`,
			`var(--${component}-${theme})`,
		);
	});
}
