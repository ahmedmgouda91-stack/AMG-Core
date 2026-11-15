/* Training OS PWA – Offline cache for GitHub Pages project subpath. */
const CACHE='trainingos-pwa-v953-3';
const APP_FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('trainingos-pwa-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(response=>{
      if(response.ok){const cp=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put('./index.html',cp)));}
      return response;
    }).catch(async()=>{const cache=await caches.open(CACHE);return (await cache.match(req))||(await cache.match('./index.html'))||Response.error()}));
  }else{
    event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(response=>{
      if(response.ok){const cp=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,cp)));}
      return response;
    })));
  }
});
