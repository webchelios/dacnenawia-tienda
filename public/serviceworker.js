// hago mi cacheo
self.addEventListener('install', (event) => {
	console.log('SW: ', event);
	//  biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
	const instalacion = new Promise(async (resolve) => {
		const cache = await caches.open('cache-1');
		await cache.addAll([
			'/',
			'/src/main.js',
			'/src/style.css',
			'manifest.json',
			'/armario-clasico.jpg',
			'/cama-tulum.jpg',
			'/estanteria-bricks.jpg',
			'favicon.svg',
			'mesa-nordica.jpg',
			'mesa-oslo.jpg',
			'silla-eames.jpg',
			'sillon-manhattan.jpg',
			'sofa-chester.jpg',
		]);

		await self.skipWaiting();
		resolve();
	});

	event.waitUntil(instalacion);
});

// PRIMERO INTERNET, luego cache. Si no hay conexión utilizo lo que guarde en cache-1. Una conexion lenta va a intentar cargar el sitio de todas maneras. Hago esta eleccion para que muestre contenido ACTUALIZADO.
// En caso de necesitarlo, debo cambiar esta estrategia de cache por una que cargue el cache en caso de conexion lenta.
self.addEventListener('fetch', (event) => {
	const respuesta = fetch(event.request)
		.then(async (respNet) => {
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
