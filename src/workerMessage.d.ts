export interface WorkerMessage {
  test: string
  run: 'js' | 'wasm'
  duration: number
  result: string
}

export declare function postMessage(message: WorkerMessage): void
