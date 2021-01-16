import * as wasm from "../rust_module/pkg";

function add(a: number, b: number) {
  let n = a;
  for (let i = 0; i < 100000000; ++i) n += b;
  return n;
}

{
  let start = performance.now();
  let result = wasm.add(2, 8);
  console.log("wasm", performance.now() - start, "ms", result);
}

{
  let start = performance.now();
  let result = add(2, 8);
  console.log("js", performance.now() - start, "ms", result);
}
