const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const title = document.querySelector('#title');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	title.classList.toggle('open');
});


const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Belém Brazil Temple",
		location: "Belém, Brazil",
		dedicated: "2022, November, 20",
		area: 28675,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
	},
	{
		templeName: "Campinas Brazil Temple",
		location: "Campinas, Brazil",
		dedicated: "2002, May, 17",
		area: 49104,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
	},
	{
		templeName: "Curitiba Brazil Temple",
		location: "Curitiba, Brazil",
		dedicated: "2008, June, 1",
		area: 47576,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/400x400/curitiba-brazil-temple-lds-852263-wallpaper.jpg"
	},
];

function createTempleCards(temples) {
	const templeImagesContainer = document.querySelector('.temple-images');
	templeImagesContainer.innerHTML = "";

	temples.forEach(temple => {
		const card = document.createElement('div');
		card.classList.add('temple-card');

		const templeName = document.createElement('h2');
		templeName.textContent = temple.templeName;
		card.appendChild(templeName);

		const location = document.createElement('p');
		location.innerHTML = `<b>Location:</b> ${temple.location}`;
		card.appendChild(location);

		const dedicated = document.createElement('p');
		dedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;
		card.appendChild(dedicated);

		const area = document.createElement('p');
		area.innerHTML = `<b>Area:</b> ${temple.area} square feet`;
		card.appendChild(area);

		const image = document.createElement('img');
		image.setAttribute("src", temple.imageUrl)
		image.setAttribute("alt", temple.templeName);
		image.setAttribute("loading", "lazy");
		card.appendChild(image);

		templeImagesContainer.appendChild(card);
	});
}


createTempleCards(temples);
const pageTitle = document.querySelector("#page-title");

document.querySelector('#home').addEventListener('click', () => {
	createTempleCards(temples);
	pageTitle.textContent = "Home";
});

document.querySelector('#old').addEventListener('click', () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
	createTempleCards(filteredTemples);
	pageTitle.textContent = "Old";
});

document.querySelector('#new').addEventListener('click', () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
	createTempleCards(filteredTemples);
	pageTitle.textContent = "New";
});

document.querySelector('#large').addEventListener('click', () => {
	const filteredTemples = temples.filter(temple => temple.area > 90000);
	createTempleCards(filteredTemples);
	pageTitle.textContent = "Large";
});

document.querySelector('#small').addEventListener('click', () => {
	const filteredTemples = temples.filter(temple => temple.area < 10000);
	createTempleCards(filteredTemples);
	pageTitle.textContent = "Small";
});