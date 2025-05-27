//hago mi cacheo
self.addEventListener('install', (event) => {
	console.log('SW: ', event);
	// biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
	const instalacion = new Promise(async (resolve) => {
		const cache = await caches.open('cache-1');
		await cache.addAll([
			'/',
			'main.js',
			'index.js',
			'styles/style.css',
			'json/productos.json',
			'classes/Producto.php',
			'manifest.json',
			'/icons/icon-72x72.png',
			'/icons/icon-96x96.png',
			'/icons/icon-128x128.png',
			'/icons/icon-144x144.png',
			'/icons/icon-152x152.png',
			'/icons/icon-192x192.png',
			'/icons/icon-384x384.png',
			'/icons/icon-512x512.png',
			'/icons/flecha.svg',
			'/icons/menu-icon-golden.svg',
			'/icons/menu-icon.svg',
			'img/products/Caramel-Brownie-over.webp',
			'img/products/chocolate-chip-Brownie-over.webp',
			'img/products/Cinnamon-Cocoa-Brownie-over.webp',
			'img/products/cream-cheese-Brownie-over.webp',
			'img/products/espresso-nib-Brownie-over.webp',
			'img/products/mint-chocolate-Brownie-over.webp',
			'img/products/Original-Brownie-over.webp',
			'img/products/Pecan-Brownie-over.webp',
			'img/products/Raspberry-Swirl-Brownie-over.webp',
			'img/products/Toffee-Crunch-Brownie-over.webp',
			'img/products/Walnut-Brownie-over.webp',
			'img/products/White-Chocolate-Brownie-over.webp',
			'img/background/home-background-1.png',
			'img/background/home-background-2.png',
			'img/background/team.jpg',
		]);

		await self.skipWaiting();
		resolve();
	});

	event.waitUntil(instalacion);
});

//Primero internet, luego cache. Si no hay conexión utilizo lo que guarde en cache-1. Una conexion lenta va a intentar cargar el sitio de todas maneras. Hago esta eleccion para que muestre contenido actualizado.
//En caso de necesitarlo, debo cambiar esta estrategia de cache por una que cargue el cache en caso de conexion lenta.
self.addEventListener('fetch', (event) => {
	const respuesta = fetch(event.request)
		.then((respNet) => {
			return caches.open('cache-1').then((cache) => {
				cache.put(event.request, respNet.clone());
				return respNet;
			});
		})
		.catch((error) => {
			return caches.match(event.request);
		});

	event.respondWith(respuesta);
});
