document.addEventListener('DOMContentLoaded', function () {
	document.body.setAttribute('data-loaded')
})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	setTimeout(function () {
		document.querySelector('.intercom-lightweight-app').remove()
		document.querySelector('#intercom-frame').remove()
	}, 1000)
}

window.onload = update
