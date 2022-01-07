document.addEventListener('DOMContentLoaded', function () {
	// let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
	// document.body.classList.add('dark')
	// __console.environment.ThemeStore.setState({ mode: 'dark' })
	document.title = 'Nordic Lights'
	for (let elem of document.querySelectorAll('div')) {
		if (elem.getAttribute('style')) {
			if (elem.getAttribute('style').indexOf('border-top:') != -1) {
				elem.removeProperty('border-top')
			} else {
			}
		}
	}
})

console.log('Loaded from www.jonasjohansson.se')
