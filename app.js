let text1 = document.getElementById('text1anim');
let text2 = document.getElementById('text2anim');
let text3 = document.getElementById('text3anim')
let text4 = document.getElementById('text4anim')

let	header = document.getElementById('header');
let backgroundBlack = document.getElementById('backgroundBlack');

//set animation effect for the header and set text2 class name
window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => header.className = 'headerSlide', 0)
	text2.className = 'text2';
})

// change text2 div class so it slides from it's initial position to the specified position
window.addEventListener('scroll', () => {
		if(text1.getBoundingClientRect().bottom <= 0) {
			text2.className = "text2show";
		}
})
// hides the header when scrolling through black background
window.addEventListener('scroll', () => {
		if(backgroundBlack.getBoundingClientRect().top <= 0 && backgroundBlack.getBoundingClientRect().bottom >= 0 ) {
			header.style.visibility = "hidden";
		} else {
			header.style.visibility = "visible";
		}
})
