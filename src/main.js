import { firstRender } from './App';
import { router } from './router';

const app = document.querySelector('#app');

document.addEventListener('DOMContentLoaded', () => {
  const initialPath = window.location.pathname;
  router(initialPath);
});

firstRender(app);
