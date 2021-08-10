import baseAPI from '../index'
import currencyData from './data'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default class CryptoService {
  static getAll = async () => {
    // Simulate network
    await delay(300)

    return {
      data: {
        list: currencyData,
        list_length: currencyData.length
      }
    }
  }
}