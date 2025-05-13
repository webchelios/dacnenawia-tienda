import { heroContent } from '../constants/constants';
import { router } from '../router';
import './Home.css';

export const Home = () => {
	const heroContainer = document.createElement('div');
	heroContainer.classList.add('hero-container');
	const heroLeft = document.createElement('div');
	heroLeft.classList.add('hero-left');
	const heroRight = document.createElement('div');
	heroRight.classList.add('hero-right');

	const divImgHero = document.createElement('div');
	divImgHero.classList.add('hero-img');
	const imgHero = document.createElement('img');
	imgHero.setAttribute(
		'src',
		'https://content.elmueble.com/medio/2021/07/13/00507324-o_47aaff7c_1657x2000.jpg',
	);
	divImgHero.append(imgHero);

	heroLeft.append(divImgHero);

	const h2Title = document.createElement('h2');
	h2Title.classList.add('hero-title');
	h2Title.textContent = heroContent.title;
	const pSubtitle = document.createElement('p');
	pSubtitle.classList.add('hero-subtitle');
	pSubtitle.textContent = heroContent.subtitle;
	const callToAction = document.createElement('button');
	callToAction.classList.add('hero-button');
	callToAction.innerText = heroContent.button;
	callToAction.addEventListener('click', (e) => {
		e.preventDefault();
		router('/store');
	});

	heroRight.append(h2Title, pSubtitle, callToAction);

	heroContainer.append(heroLeft, heroRight);

	return heroContainer;
};
