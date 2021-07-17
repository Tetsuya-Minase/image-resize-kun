import { ApplicationError } from './application-error';
import { ErrorCode } from './error-code';

export class InvalidOperationError extends ApplicationError {
  constructor(message: string) {
    super(message, ErrorCode.INVALID_OPERATION);
  }
}
