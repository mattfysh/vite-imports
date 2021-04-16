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

**prod mode**

`npm run prodB`

* CSS is missing (white background instead of green)
* worker script is loaded into main thread (`window.onmessage` is defined)
* infinite loop on dynamic import
* infinite loop on worker import
