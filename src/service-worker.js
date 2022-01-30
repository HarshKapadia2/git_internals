const cacheName = "v0.1.5";
const cacheAssets = [
	"./",
	"./index.html",
	"./robots.txt",
	"./static/css/style.css",
	"./static/js/script.js",
	"./static/img/admonition_icons/tip.png",
	"./static/img/admonition_icons/warning.png",
	"./static/img/admonition_icons/note.png",
	"./static/img/admonition_icons/caution.png",
	"./static/img/admonition_icons/important.png",
	"./static/img/clear_cross.svg",
	"./static/img/favicon.ico",
	"./static/img/icon-192.png",
	"./static/img/icon-512.png",
	"./static/img/moon.svg",
	"./static/img/sun.svg",
	"./static/img/up-arrow.svg"
];

self.addEventListener("install", (e) => {
	// Cache files
	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => cache.addAll(cacheAssets))
			.then(() => self.skipWaiting())
			.catch((err) => console.error(`Cache error: ${err}`))
	);
});

self.addEventListener("activate", (e) => {
	e.waitUntil(
		// Delete any previous cache
		caches.keys().then((cacheKeys) => {
			return Promise.all(
				cacheKeys.map((cacheKey) => {
					if (cacheKey !== cacheName) return caches.delete(cacheKey);
				})
			);
		})
	);
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		fetch(e.request)
			.then((response) => {
				const resClone = response.clone();

				// Add response to cache
				if (e.request.url.indexOf("http") === 0)
					caches
						.open(cacheName)
						.then((cache) => cache.put(e.request, resClone));

				return response;
			})
			.catch((err) =>
				caches.match(e.request).then((response) => response)
			)
	);
});
