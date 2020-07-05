const track = document.querySelector('.carousel__track');
const button__next = document.querySelector('.carousel__button--right');
const button__prev = document.querySelector('.carousel__button--left');
const display__img = document.querySelector('.carousel__display--image');
const display__desc = document.querySelector('.carousel__display--description-paragraph');
const display__title = document.querySelector('.carousel__display--title');

let direction;
let projects = [
	{
		title: "To - Do App",
		image: ('./images/projects/ToDoApp.jpg'),
		github: "https://github.com/PawelKrzesinski/To-do-app",
		glitch: "https://mytodo-app1.glitch.me",
		description: "My to-do application using HTML, CSS and JS. I have made this application so you can dynamically add " +
		"and delete your daily to-do's. All tasks are stored in a local storage and removed from it when finished. "
	},
	{
		title: "Tic Tac Toe Game",
		image: ('./images/projects/TicTacToe.jpg'),
		github: "https://github.com/PawelKrzesinski/Tic-tac-toe",
		glitch: "https://my-tic-tac-toe.glitch.me",
		description: "Simple Javascript Tic Tac Toe game. Only Player vs Player. Uses DOM manipulation to add and remove classes and styles."
	},
	{
		title: "Weather API App",
		image: ('./images/projects/WeatherApp.jpg'),
		github: "https://github.com/PawelKrzesinski/WeatherApp",
		glitch: "https://myweather-app.glitch.me",
		description: "Current weather app. Built on Node.js server with Open Weather API. Gets the current weather depending on geolocation."
		+ " Gets new data every 5 minutes"
	},
	{
		title: "Culinary Blog",
		image: ('./images/projects/DashOfPassion.jpg'),
		github: "https://github.com/PawelKrzesinski/DashOfPassion",
		glitch: "https://dashofpassion.glitch.me",
		description: "Culinary Blog. Using a nutrition API calculates calories for every recipe. As cooking is my hobby all the recipes are mine."
		+ "<br><br>PROJECT IN PROGRESS"
	},
	{
		title: "ISS Tracking app",
		image: ('./images/projects/iss-tracking-app.jpg'),
		github: "https://github.com/PawelKrzesinski/iss-tracking-app",
		glitch: "https://pawelkrzesinski.github.io/iss-tracking-app/",
		description: "International Space Station tracking APP. Uses ISS API to get location in latitude and longitude. Uses OpenStreetMap API "
			    +"to get map elements and create a map then displays ISS location. Updates every 5 seconds"
		
	}
]

//adds projects to the carousel
projects.forEach(project => {
	track.innerHTML += `
		<li class="carousel__slide">								
			<img src=${project.image} alt="" class="carousel__images ${project.title}">
		</li>`

})
const slides = Array.from(track.children);
//sets current slide to the first item in array
slides[0].classList.add('carousel__current-slide')
let slide__width = slides[0].getBoundingClientRect().width;
//sets up slides in the carousel
function setSlidePos(slide, index) {
		slide.style.left = slide__width * index + "px";
	}
	
slides.forEach(setSlidePos);

button__next.addEventListener('click', e =>{
	const current__slide = track.querySelector('.carousel__current-slide');
	const next__slide = current__slide.nextElementSibling;
	let last__slide__pos = parseInt(track.lastElementChild.style.left);
	let move__slide__by = parseInt(next__slide.style.left) * (-1);
	let removed__child = track.removeChild(track.firstElementChild);
	direction = 1;
	track.style.transform = "translateX(" + move__slide__by + "px)";
	current__slide.classList.remove('carousel__current-slide');
	next__slide.classList.add('carousel__current-slide');
	track.appendChild(removed__child);
	removed__child.style.left = last__slide__pos + slide__width;


	projects.forEach(project => {
		if(next__slide.firstElementChild.classList == `carousel__images ${project.title}`){
			display__img.innerHTML = `<img src='${next__slide.firstElementChild.src}'/img>`
			display__title.innerHTML = `${project.title}  <a href="${project.glitch}" target="__blank">
			<img class='icon__glitch' src="./images/glitch.svg"/></a>
			<a href="${project.github}" target="__blank"><img class='icon__git' src="./images/GitHub-Mark-32px.png"/></a>`;
			display__desc.innerHTML = `${project.description}`;
		}
	})




})

button__prev.addEventListener('click', () => {
	const current__slide = track.querySelector('.carousel__current-slide');
	let removed__child = track.removeChild(track.lastElementChild);
	let first__slide__pos = parseInt(track.firstElementChild.style.left);
	track.insertBefore(removed__child, track.firstElementChild);
	removed__child.style.left = first__slide__pos - slide__width;
	let prev__slide = current__slide.previousElementSibling;
	prev__slide.classList.add('carousel__current-slide');
	current__slide.classList.remove('carousel__current-slide');
	let left__style__int = parseInt(prev__slide.style.left);
	const move__slide__by = left__style__int * (-1);
	direction = -1;
	track.style.transform = "translateX(" + move__slide__by + "px)";
	
	projects.forEach(project => {
		if(prev__slide.firstElementChild.classList == `carousel__images ${project.title}`){
			display__img.innerHTML = `<img src='${prev__slide.firstElementChild.src}'/img>`
			display__title.innerHTML = `${project.title}  <a href="${project.glitch}" target="__blank">
			<img class='icon__glitch' src="./images/glitch.svg"/></a>
			<a href="${project.github}" target="__blank"><img class='icon__git' src="./images/GitHub-Mark-32px.png"/></a>`;
			display__desc.innerHTML = `${project.description}`;
		}
	})

})

//Displays first project
display__img.innerHTML = `<img src='${projects[0].image}'/img>`
display__title.innerHTML = `${projects[0].title}  <a href="${projects[0].glitch}" target="__blank"><img class='icon__glitch' src="./images/glitch.svg"/></a><a href="${projects[0].github}" target="__blank"><img class='icon__git' src="./images/GitHub-Mark-32px.png"/></a>`;
display__desc.innerHTML = `${projects[0].description}`;


//selects targeted slide and scrolls it to the first position
slides.forEach(slide => {
	slide.addEventListener('click', e => {
		//checks if clicked el. parent is a carousel slide and then adds current slide class to it
		if(e.target.parentNode.className === "carousel__slide"){
			slides.forEach(slide => {slide.classList.remove('carousel__current-slide')})
			e.target.parentNode.classList.add('carousel__current-slide')
			const current__slide = track.querySelector('.carousel__current-slide');
			//sets position of a targeted slide
			let target__pos = parseInt(e.target.parentNode.style.left)
			if(target__pos < 0){
				track.style.transform = "translateX(" + target__pos * (-1) + "px)";
			} else {
				track.style.transform = "translateX(-" + target__pos + "px)";
			}
			//gets any previous siblings of a current slide
			function getPrevSiblings(el) {
				const siblings = [];
				while(el = el.previousElementSibling) {
					siblings.push(el);
				}
				return siblings;
			}
			//removes any previous siblings and appends them at the end of the carousel
			let siblings = getPrevSiblings(current__slide);
			siblings.forEach(sibling => {
				let removed__child = track.removeChild(sibling);
				const last__slide__pos = parseInt(track.lastElementChild.style.left);
				track.appendChild(removed__child);
				removed__child.style.left = last__slide__pos + slide__width;
			})
			// checks for project title in the target class list and if it is a match then displays project's description, image and title.
			projects.forEach(project => {
				if(e.target.classList == `carousel__images ${project.title}`){
					display__img.innerHTML = `<img src='${e.target.src}'/img>`
					display__title.innerHTML = `${project.title}  <a href="${project.glitch}" target="__blank">
					<img class='icon__glitch' src="./images/glitch.svg"/></a>
					<a href="${project.github}" target="__blank"><img class='icon__git' src="./images/GitHub-Mark-32px.png"/></a>`;
					display__desc.innerHTML = `${project.description}`;
				}
			})
					
		}
		
	})
})
