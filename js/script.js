document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.intercom-lightweight-app').remove()
	document.body.classList.add('loaded')
})

console.log('Loaded from www.jonasjohansson.se')

function update() {}

window.onload = update
