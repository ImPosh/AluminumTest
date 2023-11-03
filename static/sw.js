importScripts("/classes/spanish.js");
importScripts("classes/history.js");
importScripts("classes/math.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));