document.addEventListener('DOMContentLoaded', function () {})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	document.body.setAttribute('data-loaded', true)
	setTimeout(function () {
		remove('.intercom-lightweight-app')
		remove('#intercom-frame')
	}, 3000)
}

window.onload = update

function remove(sel) {
	const el = document.querySelector(sel)
	if (document.body.contains(el)) {
		document.querySelector(el).remove()
	}
}
