const hamButton = document.querySelector('#hamburguer-menu');
const navigation = document.querySelector('#header-navigation');
const webSiteLogo = document.querySelector('#website-logo');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	webSiteLogo.classList.toggle('open');
});