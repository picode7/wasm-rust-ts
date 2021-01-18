import * as wasm from "../rust_module/pkg/rust_module";
import { memory } from "../rust_module/pkg/rust_module_bg.wasm";

function add(a: number, b: number) {
  let n = a;
  for (let i = 0; i < 100_000_000; ++i) n += b;
  return n;
}

function sum_up(arr: Float64Array) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}

function init_arr() {
  let arr = new Float64Array(100_000_000);
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = i;
  }
  return arr;
}

{
  let start = performance.now();
  let result = wasm.add(2, 8);
  console.log("add wasm", performance.now() - start, "ms", result);
}

{
  let start = performance.now();
  let result = add(2, 8);
  console.log("add js", performance.now() - start, "ms", result);
}

let start2 = performance.now();
let ptr = wasm.init_arr();
let wasmArr = new Float64Array(memory.buffer, ptr, 100_000_000);
console.log("init wasm-arr", performance.now() - start2, "ms");

let start1 = performance.now();
let arr = init_arr();
console.log("init js-arr", performance.now() - start1, "ms");

{
  let start = performance.now();
  let result = wasm.sum_up(new Float64Array(arr));
  console.log("sum_up js-arr", "wasm", performance.now() - start, "ms", result);
}

{
  let start = performance.now();
  let result = sum_up(new Float64Array(arr));
  console.log("sum_up js-arr", "js", performance.now() - start, "ms", result);
}

{
  let start = performance.now();
  let result = wasm.sum_up(wasmArr);
  console.log(
    "sum_up wsm-arr",
    "wasm",
    performance.now() - start,
    "ms",
    result
  );
}

{
  let start = performance.now();
  let result = sum_up(wasmArr);
  console.log("sum_up wsm-arr", "js", performance.now() - start, "ms", result);
}
