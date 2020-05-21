
let	header = document.getElementById('header');
let backgroundImage = document.getElementById('content');
let name = document.getElementById('headerLeft')
let copyrights = document.getElementById('copyrights')
let spanMonth = document.getElementById('month')
let spanDay = document.getElementById('day')
let spanYear = document.getElementById('year')
let photoDiv = document.getElementById('photoDiv')
let barsBtn = document.getElementById('bars')
let dropMenu = document.getElementById('dropDownDiv')
let dropMenuLeft = document.getElementById('dropDownLeft')
let langIcons = document.getElementById('langIcons')


let date = new Date;
let year = date.getFullYear();
let month = date.getMonth();
let day = `${date.getDate()}`.padStart(2, "0");

let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
month = monthName[month];
spanMonth.innerHTML = month;
spanDay.innerHTML = day;
spanYear.innerHTML = year;

copyrights.innerHTML = `&copy; Copyright ${year}, Pawel Krzesinski`




window.addEventListener('DOMContentLoaded', () => {
	//set animation effects
	setTimeout(() => name.className = 'headerNameAppear', 500)
	setTimeout(() => header.style.animation = "animation: slideRight 0.2s ease", 0)
	//takes the dark filter on the left of drop menu out of the screen
	dropMenuLeft.style.transform = "translate3d(-100%, 0, 0)"

})
//gets all the icons in the langIcons div
let icons = langIcons.querySelectorAll('img');
function iconsAppear() {
	//makes icons variable content in to a proper array and gives it an animation effect
	Array.from (icons)
		.forEach(icon => icon.style.animation = 'appear 1.5s linear')
}

window.addEventListener('scroll', () => {
	// hides the header when scrolling through background
		if(backgroundImage.getBoundingClientRect().top <= 0 && backgroundImage.getBoundingClientRect().bottom >= 0 ) {
			header.style.visibility = "hidden";
		} else {
			header.style.visibility = "visible";
		}
		//makes the icons on the bottom appear when scrolling 
		if(langIcons.getBoundingClientRect().top <= 1000) {
			iconsAppear();
		}
	
})

//adds functionality to bars icon when in mobile/zoomed in mode
barsBtn.addEventListener('click', () => {
	if(dropMenu.className === 'dropDownDiv'){
		dropMenu.className = 'dropDownDivOn';
		dropMenuLeft.className = "dropDownLeftA"
		dropMenuLeft.style.transform = "none";
	} else {
		dropMenu.className = 'dropDownDiv';
		dropMenuLeft.className = "dropDownLeftB"
		setTimeout(() => {
			dropMenuLeft.style.transform = "translate3d(-100%, 0, 0)";
		}, 500)
	}
})
