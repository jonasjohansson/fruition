document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.intercom-lightweight-app').remove()
	document.classList.add('loaded')
})

console.log('Loaded from www.jonasjohansson.se')

function update() {}

window.onload = update
