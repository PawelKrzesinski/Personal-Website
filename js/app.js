
const	header = document.getElementById('header');
const background_image = document.getElementById('background');
const name = document.getElementById('header_left')
const copyrights = document.getElementById('copyrights')
const span_month = document.getElementById('month')
const span_day = document.getElementById('day')
const span_year = document.getElementById('year')
const bars_btn = document.getElementById('bars')
const drop_menu = document.getElementById('drop_down_div')
const drop_menu_left = document.getElementById('drop_down_left')
const lang_icons = document.getElementById('lang_icons')



let date = new Date;
let year = date.getFullYear();
let month = date.getMonth();
let day = `${date.getDate()}`.padStart(2, "0");

let month_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
month = month_name[month];
span_month.innerHTML = month;
span_day.innerHTML = day;
span_year.innerHTML = year;

copyrights.innerHTML = `&copy; Copyright ${year}, Pawel Krzesinski`






window.addEventListener('DOMContentLoaded', () => {
	//set animation effects
	setTimeout(() => name.className = 'header_name_appear', 500)
	setTimeout(() => header.style.animation = "animation: slide_right 0.2s ease", 0)
	//takes the dark filter on the left of drop menu out of the screen
	drop_menu_left.style.transform = "translate3d(-100%, 0, 0)"

})
//gets all the icons in the langIcons div
let icons = lang_icons.querySelectorAll('img');
function icons_appear() {
	//makes icons variable content in to a proper array and gives it an animation effect
	Array.from (icons)
		.forEach(icon => icon.style.animation = 'appear 1.5s linear')
}

window.addEventListener('scroll', () => {
		//makes the icons on the bottom appear when scrolling 
		if(lang_icons.getBoundingClientRect().top <= 1000) {
			icons_appear();
		}

})

//adds functionality to bars icon when in mobile/zoomed in mode
bars_btn.addEventListener('click', () => {
	if(drop_menu.className === 'drop_down_div_off' || drop_menu.className === 'drop_down_div'){
		drop_menu.className = 'drop_down_div_on';
		drop_menu_left.className = "drop_down_left_on";
		drop_menu_left.style.transform = "none";
		drop_menu.style.transform = "none";
	} else {
		drop_menu.className = 'drop_down_div_off';
		drop_menu_left.className = "drop_down_left_off";
		setTimeout(() => {
			drop_menu.style.transform = "translateX(100%)";
		}, 0),		
		setTimeout(() => {
			drop_menu_left.style.transform = "translateX(-100%)";
		}, 400)
	}
})
