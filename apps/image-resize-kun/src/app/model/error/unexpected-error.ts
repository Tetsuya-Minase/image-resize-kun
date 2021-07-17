import { ApplicationError } from './application-error';
import { ErrorCode } from './error-code';

export class UnexpectedError extends ApplicationError {
  constructor(message: string) {
    super(message, ErrorCode.UNEXPECTED_ERROR);
  }
}
