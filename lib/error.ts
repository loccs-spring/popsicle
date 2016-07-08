import makeErrorCause = require('make-error-cause')
import Request from './request'

export default class PopsicleError extends makeErrorCause.BaseError {

  code: string
  popsicle: Request<any>
  name = 'PopsicleError'

  constructor (message: string, code: string, original: Error, popsicle: Request<any>) {
    super(message, original)

    this.code = code
    this.popsicle = popsicle
  }

}
