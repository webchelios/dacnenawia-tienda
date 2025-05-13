import { paths, router } from '../router';
import './Navbar.css';

export const Navbar = () => {
	const nav = document.createElement('nav');
	nav.className = 'navbar';

	const logo = document.createElement('a');
	logo.href = '/';
	// logo.setAttribute('data-link', 'true');
	logo.className = 'navbar-brand';
	logo.textContent = 'DACNENAWIA';

	const navList = document.createElement('ul');
	navList.className = 'nav-list';

	for (const path of paths) {
		const listItem = document.createElement('li');
		listItem.className = 'nav-item';

		const link = document.createElement('a');
		link.href = path.route;
		link.textContent = path.name;
		// link.setAttribute('data-link', 'true');
		link.className = 'nav-link';
		link.addEventListener('click', (e) => {
			e.preventDefault();
			router(path.route);
		});

		listItem.appendChild(link);
		navList.appendChild(listItem);
	}

	nav.append(logo, navList);
	return nav;
};
