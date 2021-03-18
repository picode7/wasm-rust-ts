import * as wasm from '../rust_module/pkg/rust_module'
import * as js from './lib'
import { memory } from '../rust_module/pkg/rust_module_bg.wasm'
import { postMessage } from './workerMessage'

// const table = document.body.appendChild(document.createElement('table'))

// const header = table.insertRow()
// header.insertCell().textContent = 'test'
// header.insertCell().textContent = 'js'
// header.insertCell().textContent = 'wasm'

async function test(name: string, js: () => any, wasm: () => any) {
  //   const row = table.insertRow()
  //   row.insertCell().textContent = name
  {
    const start = performance.now()
    const result = js()
    // row.insertCell().textContent = `${format(performance.now() - start, 3)} ms`
  }

  {
    const start = performance.now()
    const result = wasm()
    // row.insertCell().textContent = `${format(performance.now() - start, 3)} ms`
    postMessage({
      test: name,
      run: 'js',
      duration: performance.now() - start,
      result,
    })
  }
}

function format(n: number, digits: number) {
  const d = 10 ** digits
  return (Math.round(n * d) / d).toFixed(digits)
}

test(
  'add',
  () => js.add(2, 8),
  () => wasm.add(2, 8)
)

let jsArr: Float64Array
let wasmArr: Float64Array
test(
  'init arr',
  () => (jsArr = js.initArr()),
  () => {
    const ptr = wasm.init_arr()
    wasmArr = new Float64Array(memory.buffer, ptr, 100_000_000)
  }
)

test(
  'sum up: js arr',
  () => js.sumUp(jsArr),
  () => wasm.sum_up(jsArr)
)

test(
  'sum up: wasm arr',
  () => js.sumUp(wasmArr),
  () => wasm.sum_up(wasmArr)
)
