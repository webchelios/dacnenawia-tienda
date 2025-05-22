import { paths, router } from '../router';
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

    nav.append(logo, navList);
    return nav;
};