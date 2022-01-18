document.addEventListener('DOMContentLoaded', function () {})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	setTimeout(function () {
		remove('.intercom-lightweight-app')
		remove('#intercom-frame')
		document.body.setAttribute('data-loaded', true)
	}, 3000)
}

window.onload = update

function remove(sel) {
	const el = document.querySelector(sel)
	if (document.contains(el)) {
		document.querySelector(el).remove()
	}
}
