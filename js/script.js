document.addEventListener('DOMContentLoaded', function () {})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	document.body.setAttribute('data-loaded', true)
	setTimeout(function () {
		document.body.removeChild(document.querySelector('.intercom-lightweight-app'))
		document.body.removeChild(document.querySelector('#intercom-frame'))
		document.body.removeChild(document.querySelector('#scroll-properties'))
		document.querySelectorAll('body > textarea').forEach((el) => {
			document.body.removeChild(el)
		})
	}, 3000)
}

window.onload = update
