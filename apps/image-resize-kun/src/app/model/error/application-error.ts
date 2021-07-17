import { ErrorCode } from './error-code';

export abstract class ApplicationError extends Error {
  readonly #code: ErrorCode;

  protected constructor(
    message: string,
    code: ErrorCode = ErrorCode.UNEXPECTED_ERROR
  ) {
    super(message);
    this.#code = code;
  }

  public get code() {
    return this.#code;
  }
}
