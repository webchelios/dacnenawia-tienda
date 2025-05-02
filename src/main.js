import { Navbar } from './components/Navbar';
import { renderNotification } from './components/Notification';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <div id="notification-place"></div>
    <div id="navbar"></div>
    <div id="cart-place"></div>
    <div id="home"></div>
    <div id="store"></div>
  </div>
`;

Navbar(document.querySelector('#navbar'));

Home(document.querySelector('#home'));
Store(document.querySelector('#store'));
