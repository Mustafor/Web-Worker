import Worker from './calculation-worker?worker'

const calculateWorker = new Worker()

export default function calculate(base: number = 10):Promise<number> {
    return new Promise((resolve) => {
        calculateWorker.postMessage(base)
        calculateWorker.onmessage = (event) => {
          resolve(event.data)
          event.data
        }
    })
}