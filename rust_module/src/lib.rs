use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(n1: f64, n2: f64) -> f64 {
    let mut n = n1;
    for _i in 0..100_000_000 {
        n += n2;
    }
    n 
}