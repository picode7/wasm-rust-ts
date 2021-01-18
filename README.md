# WebAssembly + Rust + TypeScript + Webpack Example

## Setup

Rust dependencies:

- [Rust](https://www.rust-lang.org/tools/install)
- Optional: VS Code extension [rust-analyser](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)
- [`cargo install wasm-pack`](https://crates.io/crates/wasm-pack)
- [`cargo install cargo-watch`](https://crates.io/crates/cargo-watch)
- `wasm-pack build ./rust_module/`

NPM dependencies:

- `npm install`

## Usage

- Run `npm run watch`
- Run `npm run serve`
- Open in browser: <http://localhost:5000/>

## In a new project

- Use `cargo init --lib` to setup the Rust project or use this example
