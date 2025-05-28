import { renderPage } from './App';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';
import { NoPage } from './pages/NoPage';
import { Admin } from './pages/Admin';
import { We } from './pages/We';

export const router = async (route) => {
	switch (route) {
		case '/':
			renderPage(Home());
			break;
		case '/tienda':
			renderPage(await Store());
			break;
		case '/carrito':
			renderPage(await Cart());
			break;
		case '/admin':
			renderPage(Admin());
			break;
		case '/nosotros':
			renderPage(We());
			break;
		default:
			renderPage(NoPage());
			break;
	}
};

export const paths = [
	{
		route: '/',
		name: 'Inicio',
	},
	{
		route: '/tienda',
		name: 'Tienda',
	},
	{
		route: '/nosotros',
		name: 'Nosotros',
	},
	{
		route: '/carrito',
		name: 'Carrito',
	},
	{
		route: '/admin',
		name: 'Administrar',
	},
];
