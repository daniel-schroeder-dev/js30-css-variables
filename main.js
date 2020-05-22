const blurInput = document.getElementById('blur');
const sizeInput = document.getElementById('size');
const hueInput = document.getElementById('hue');

const img = document.querySelector('img');

blurInput.addEventListener('input', function() {
  img.style.setProperty('--blur-amount', this.value + 'px');
});

sizeInput.addEventListener('input', function() {
	img.style.setProperty('--size', this.value + 'px');
});

hueInput.addEventListener('input', function() {
	img.style.setProperty('--hue', this.value + 'deg');
});
