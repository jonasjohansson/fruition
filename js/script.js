document.addEventListener('DOMContentLoaded', function () {})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	document.body.setAttribute('data-loaded', true)
	setTimeout(function () {
		document.body.removeChild(document.querySelector('.intercom-lightweight-app'))
		document.body.removeChild(document.querySelector('#intercom-frame'))
	}, 3000)
}

window.onload = update
