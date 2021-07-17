export const ErrorCode = {
  INVALID_OPERATION: 'INVALID_OPERATION',
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',
} as const;
export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode];
