import { paths, router } from '../router';
import { pwaStore } from '../store/pwaStore';
import './Navbar.css';

export const Navbar = () => {
	const nav = document.createElement('nav');
	nav.className = 'navbar';

	const logo = document.createElement('a');
	logo.href = '/';
	logo.className = 'navbar-brand';
	logo.textContent = 'DACNENAWIA';
	logo.addEventListener('click', (e) => {
		e.preventDefault();
		router('/');
	});

	const navList = document.createElement('ul');
	navList.className = 'nav-list';

	for (const path of paths) {
		const listItem = document.createElement('li');
		listItem.className = 'nav-item';

		const link = document.createElement('a');

		link.href = path.route;
		link.textContent = path.name;
		link.className = 'nav-link';
		link.addEventListener('click', (e) => {
			e.preventDefault();
			history.pushState(null, '', path.route);
			router(path.route);
		});

		listItem.appendChild(link);
		navList.appendChild(listItem);
	}

	const installBtn = document.createElement('button');
	installBtn.className = 'install-btn';
	installBtn.textContent = 'Instalar App';
	installBtn.addEventListener('click', pwaStore.installApp);

	navList.append(installBtn);

	const menuToggle = document.createElement('div');
	menuToggle.className = 'menu-toggle';
	menuToggle.innerHTML = '=';
	menuToggle.addEventListener('click', () => {
		navList.classList.toggle('active');
	});

	nav.appendChild(menuToggle);

	nav.append(logo, navList);
	return nav;
};
