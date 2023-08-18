// Add event listeners to section headers
document.getElementById('teams').addEventListener('click', () => {
	toggleContent('teams-content');
	toggleArrow('teams');
});

document.getElementById('projects').addEventListener('click', () => {
	toggleContent('projects-content');
	toggleArrow('projects');
});

document.getElementById('tasks').addEventListener('click', () => {
	toggleContent('tasks-content');
	toggleArrow('tasks');
});

document.getElementById('reminders').addEventListener('click', () => {
	toggleContent('reminders-content');
	toggleArrow('reminders');
});

document.getElementById('messeger').addEventListener('click', () => {
	toggleContent('messeger-content');
	toggleArrow('messeger');
});

// Function to toggle the visibility of the content
const toggleContent = sectionId => {
	const content = document.getElementById(sectionId);
	if (content.style.display === 'none' || content.style.display === '') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
};

// Function to toggle the arrow icons
const toggleArrow = sectionId => {
	const arrowIcons = document.querySelectorAll(`#${sectionId} .toggle-icon`);
	arrowIcons.forEach(icon => {
		icon.classList.toggle('hidden');
	});
};

const sectionButtons = document.querySelectorAll('.nav-icons .material-icons-outlined');
const sections = document.querySelectorAll('.nav-sections > div');

const homeButton = document.getElementById('home-btn'); // Get the home button by ID

// Add "active" class to the home button by default
homeButton.classList.add('active');

// Show all sections initially
sections.forEach(section => section.classList.remove('hidden'));

sectionButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		sectionButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');

		sections.forEach(section => section.classList.add('hidden'));

		if (index === 0) {
			sections.forEach(section => section.classList.remove('hidden'));
		} else {
			sections[index - 1].classList.remove('hidden');
		}
	});
});
// Add this to your existing JavaScript
const hamburgerMenu = document.getElementById('hamburger-menu');
const navItems = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', () => {
	console.log('clicked');
	navItems.classList.toggle('show');
});
