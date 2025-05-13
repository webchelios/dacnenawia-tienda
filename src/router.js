import { renderPage } from './App';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { NoPage } from './pages/NoPage';

export const router = (route) => {
	switch (route) {
		case '/':
			renderPage(Home());
			break;
		case '/store':
			renderPage(Store());
			break;
		default:
			renderPage(NoPage());
			break;
	}
};

// export const paths = ['/', '/store', '/about'];
export const paths = [
	{
		route: '/',
		name: 'Inicio',
	},
	{
		route: '/store',
		name: 'Tienda',
	},
	{
		route: '/about',
		name: 'Nosotros',
	},
];
