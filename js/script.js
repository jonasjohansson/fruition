document.addEventListener('DOMContentLoaded', function () {
	document.body.setAttribute('data-loaded')
})

console.log('Loaded from www.jonasjohansson.se')

function update() {
	setTimeout(function () {
		remove('.intercom-lightweight-app')
		remove('#intercom-frame')
	}, 1000)
}

window.onload = update

function remove(el) {
	if (document.body.contains(el)) {
		document.querySelector(el).remove()
	}
}
