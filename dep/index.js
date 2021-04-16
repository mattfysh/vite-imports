import MyWorker from './worker?worker'

try {
  const worker = new MyWorker()
  worker.postMessage('test from dep/index.js -> worker.js')
} catch(e) {
  console.error(e)
}

const dynamicPromise = import('./dynamic')
dynamicPromise.then(dynamic => {
  console.log('dynamic has loaded', dynamic)
})
