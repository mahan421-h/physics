const C='physiclab-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html'])).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.open(C).then(async c=>{const m=await c.match(e.request);const n=fetch(e.request).then(r=>{if(r.status==200&&new URL(e.request.url).origin==location.origin)c.put(e.request,r.clone());return r}).catch(()=>m);return m||n}))});
