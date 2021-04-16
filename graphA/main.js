import MyWorker from 'dep/worker?worker'

const worker = new MyWorker()
worker.postMessage('test from graphA/main.js -> worker.js')

const dynamicPromise = import('dep/dynamic')
dynamicPromise.then(dynamic => {
  console.log('dynamic has loaded', dynamic)
})
