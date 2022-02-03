const cacheName = "v1";
const cacheAssets = [
	"./",
	"./index.html",
	"./robots.txt",
	"./CNAME",
	"./static/css/style.css",
	"./static/js/script.js",
	"./static/img/admonition_icons/tip.png",
	"./static/img/admonition_icons/warning.png",
	"./static/img/admonition_icons/note.png",
	"./static/img/admonition_icons/caution.png",
	"./static/img/admonition_icons/important.png",
	"./static/img/add-1.jpg",
	"./static/img/add-2.jpg",
	"./static/img/add-3.jpg",
	"./static/img/add-to-master_file_1-1.jpg",
	"./static/img/branch-1.png",
	"./static/img/branch-2.png",
	"./static/img/branch-3.png",
	"./static/img/branch-4.png",
	"./static/img/branches.png",
	"./static/img/cat-1.jpg",
	"./static/img/cat-FETCH_HEAD-1.png",
	"./static/img/cat-FETCH_HEAD-2.png",
	"./static/img/cat-file-p-1.jpg",
	"./static/img/cat-file-p-2.jpg",
	"./static/img/cat-file-p-3.jpg",
	"./static/img/cat-file-p-4.jpg",
	"./static/img/cat-file-p-5.jpg",
	"./static/img/cat-file-p-6.jpg",
	"./static/img/cat-file-p-7.jpg",
	"./static/img/cat-file-p-8.jpg",
	"./static/img/cat-file-t-1.jpg",
	"./static/img/cat-logs.png",
	"./static/img/cat-packed-refs.png",
	"./static/img/cross.svg",
	"./static/img/commit-master_file_1-1.jpg",
	"./static/img/connection-graph-1.png",
	"./static/img/connection-graph-2.png",
	"./static/img/connection-graph-3.png",
	"./static/img/connection-graph-4.png",
	"./static/img/connection-graph-5.png",
	"./static/img/decompress-file.png",
	"./static/img/dir-1.jpg",
	"./static/img/dir-2.jpg",
	"./static/img/du-c-1.jpg",
	"./static/img/du-c-2.jpg",
	"./static/img/du-c-3.jpg",
	"./static/img/du-c-4.jpg",
	"./static/img/edit-master_file_1-1.jpg",
	"./static/img/favicon.ico",
	"./static/img/fetch-1.png",
	"./static/img/fork-syncing.png",
	"./static/img/gh-branch-list-1.png",
	"./static/img/git-init.jpg",
	"./static/img/git-ls-files.png",
	"./static/img/head-1.jpg",
	"./static/img/icon-192.png",
	"./static/img/icon-512.png",
	"./static/img/index-explained.png",
	"./static/img/log-1.jpg",
	"./static/img/ls-a-1.jpg",
	"./static/img/mkdir_1.jpg",
	"./static/img/moon.svg",
	"./static/img/mv-1.jpg",
	"./static/img/og-img.png",
	"./static/img/sha1sum.png",
	"./static/img/sun.svg",
	"./static/img/touch-master_file_1.jpg",
	"./static/img/touch-master_file_2.jpg",
	"./static/img/tree-1.png",
	"./static/img/up-arrow.svg",
	"./static/img/verify-pack-1.jpg"
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
