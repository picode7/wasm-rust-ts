export {}

var webworker = new Worker(new URL('./worker.ts', import.meta.url))
webworker.postMessage('Run')
webworker.onmessage = function (n) {
  console.log('Result: ', n.data)
}
