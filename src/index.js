/// <reference types="@fastly/js-compute" />

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {

  const path = new URL(event.request.url).pathname
  switch (path) {
    case "/pass": {
      return fetch('https://httpbin.org/headers', {
        backend: 'httpbin',
        cacheOverride: new CacheOverride("pass")
      })
    }
    case "/no-pass": {
      return fetch('https://httpbin.org/headers', {
        backend: 'httpbin',
      })
    }
  }
  return new Response("OK", { status: 200 });
}
