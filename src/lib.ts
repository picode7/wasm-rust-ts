export function add(a: number, b: number) {
  let n = a
  for (let i = 0; i < 100_000_000; ++i) n += b
  return n
}

export function sumUp(arr: Float64Array) {
  let sum = 0
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i]
  }
  return sum
}

export function initArr() {
  let arr = new Float64Array(100_000_000)
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = i
  }
  return arr
}
