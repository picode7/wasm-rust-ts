use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(n1: f64, n2: f64) -> f64 {
    let mut n = n1;
    for _i in 0..100_000_000 {
        n += n2;
    }
    n
}

#[wasm_bindgen]
pub fn sum_up(a: &mut [f64]) -> f64 {
    let mut sum: f64 = 0.0;
    for v in a.iter() {
        sum += v;
    }
    sum
}

#[wasm_bindgen]
pub fn init_arr() -> *const f64 {
    let mut my_array: Vec<f64> = Vec::with_capacity(100_000_000);
    for i in 0..my_array.len() {
        my_array[i] = i as f64;
    }
    my_array.as_ptr()
}
