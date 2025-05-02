import { sections } from '../constants/constants';
import { Cart } from '../pages/Cart';
import './Navbar.css';

export const Navbar = (element) => {
	const navbarElement = document.createElement('nav');

	const navbarLogo = document.createElement('a');
	navbarLogo.setAttribute('href', `#`);
	const navbarLogoTitle = document.createElement('h1');
	navbarLogoTitle.textContent = 'DACNENAWIA';
	navbarLogo.append(navbarLogoTitle);

	const navbarUl = document.createElement('ul');
	navbarUl.classList.add('section-list');
	for (const section of sections) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = section;
		a.setAttribute('href', `/${section}`);
		li.append(a);
		navbarUl.append(li);

		if (section === 'Carrito') {
			a.removeAttribute('href');

			let cartVisible = false;
			const cartContainer =
				document.querySelector('#cart') || document.createElement('div');
			cartContainer.id = 'cart';
			document.querySelector('#cart-place').append(cartContainer);

			li.addEventListener('click', () => {
				cartVisible = !cartVisible;

				if (cartVisible) {
					Cart(cartContainer);
					cartContainer.style.display = 'block';
				} else {
					cartContainer.style.display = 'none';
				}

				if (cartContainer.querySelector('.empty-cart')) {
					console.log('El carrito está vacío');
				}
			});
		}
	}

	navbarElement.append(navbarLogo, navbarUl);

	element.append(navbarElement);
};
