let text1 = document.getElementById('text1anim');
let text2 = document.getElementById('text2anim');
let text3 = document.getElementById('text3anim')
let text4 = document.getElementById('text4anim')

setTimeout(() => photoDiv.className = 'photoDiv', 300)
// adds animation effects to text divs
window.addEventListener('scroll', () => {
	if(text1.getBoundingClientRect().bottom <= 500) {
		text2.className = "text2show";
	}
	if(backgroundImage.getBoundingClientRect().top <= -1000) {
		text3.classList.add("text3show", "text3");
	}
	if(text3.getBoundingClientRect().top <= 500) {
		 text4.style.animation = 'slideRight 0.5s ease-in';
	}
})
