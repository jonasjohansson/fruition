window.onload = function () {
	let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
	document.body.classList.add('dark');
	__console.environment.ThemeStore.setState({ mode: 'dark' });
};
console.log('Loaded from www.jonasjohansson.se');
