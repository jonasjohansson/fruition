document.addEventListener('DOMContentLoaded', function () {})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	document.body.setAttribute('data-loaded', true)
	setTimeout(function () {
		remove('.intercom-lightweight-app')
		remove('#intercom-frame')
	}, 2000)
}

window.onload = update

function remove(el) {
	if (document.contains(el)) {
		document.querySelector(el).remove()
	}
}
