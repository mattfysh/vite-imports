# Vite repro

Issues with dependencies + dynamic & worker imports

To setup, run `npm install`. If making any changes to `/dep` be sure to run `npm install` again so the postinstall script can copy your changes into `/node_modules/dep`

## Graph A

**dev mode**

`npm run devA`

* no issues

**prod mode**

`npm run prodA`

* worker script is loaded into main thread (`window.onmessage` is defined)

## Graph B

**dev mode**

`npm run devB`

* worker script is loaded into main thread (`window.onmessage` is defined)
* fails to create new Worker() - "(void 0) is not a constructor"
* a dynamic import inside a dependency can clash with other package names under the `/.vite/[dep].js?v=[v]` schema, e.g. perhaps it should be `/.vite/dep/dynamic.js` instead of `/.vite/dynamic.js`

**prod mode**

`npm run prodB`

* CSS is missing (white background instead of green)
* worker script is loaded into main thread (`window.onmessage` is defined)
* code from `dep/index.js` is erroneously placed inside the worker chunk, which could be causing the next two issues
* infinite loop on dynamic import
* infinite loop on worker import
