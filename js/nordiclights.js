document.addEventListener('DOMContentLoaded', function () {
	// let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
	// document.body.classList.add('dark')
	// __console.environment.ThemeStore.setState({ mode: 'dark' })
})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	setTimeout(function () {
		document.title = 'Nordic Lights'
		for (let elem of document.querySelectorAll('div')) {
			if (elem.getAttribute('style')) {
				if (elem.getAttribute('style').indexOf('border-top:') != -1) {
					elem.removeProperty('border-top')
				} else {
				}
			}
		}
	}, 1000)
}

function playVideo() {
	document.querySelectorAll('video').forEach((video) => {
		video.setAttribute('playsinline', '')
		video.setAttribute('muted', '')
		video.setAttribute('loop', '')
		video.play()
	})

	window.removeEventListener('click', playVideo)
}

window.addEventListener('click', playVideo)

window.onload = update
window.onload = playVideo
