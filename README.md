# WebAssembly + Rust + TypeScript + Webpack Example

## Setup

Rust dependencies:

- [Rust](https://www.rust-lang.org/tools/install)
- [`cargo install wasm-pack`](https://crates.io/crates/wasm-pack)
- [`cargo install cargo-watch`](https://crates.io/crates/cargo-watch)
- `wasm-pack build ./rust_module/`

NPM dependencies:

- [`npm install serve -g`](https://www.npmjs.com/package/serve)
- `npm install`

## Usage

- Run `npm run watch`
- Run `serve ./dist/`
- Open in browser: <http://localhost:5000/>

## In a new project

- Use `cargo init --lib` to setup the Rust project or use this example
