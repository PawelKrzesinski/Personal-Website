const text1 = document.getElementById('text1_anim');
const text2 = document.getElementById('text2_anim');
const text3 = document.getElementById('text3_anim')
const text4 = document.getElementById('text4_anim')
const anim_backg = document.getElementById('animated_background')
const photo = document.getElementById('my_photo')
const intro1 = document.getElementById('intro1')


// adds animation effects to text divs
window.addEventListener('scroll', () => {
	if(text1.getBoundingClientRect().bottom <= 0) {
		anim_backg.style.animation = 'slide_right 0.2s ease-out'
		anim_backg.style.opacity = '1'
		setTimeout(() => {
			text2.style.animation = 'slide_left 0.2s ease-in'
			text2.style.opacity = '1'
		}, 200)
		setTimeout(() => {
			intro1.style.animation = 'slide_right 0.2s linear'
			intro1.style.opacity = '1'
		}, 400)
		setTimeout(() => {
			photo.style.animation = 'appear 0.2s linear'
			photo.style.opacity = '1'
		},700)
	}
	if(background_image.getBoundingClientRect().top <= -400) {
		text3.classList.add("text3_show", "text3");
	}
	if(text2.getBoundingClientRect().top <= 0) {
		text4.style.animation = 'appear 1s ease-in';
		text4.style.opacity = '1';
	}
})
