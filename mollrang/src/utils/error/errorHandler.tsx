export class ApiError extends Error {
  redirectUrl: string = '';
  notFound: boolean = false;
}

export function isInstanceOfApiError(object: unknown): object is ApiError {
  return object instanceof ApiError && ('redirectUrl' in object || 'notFound' in object);
}

export class ApiException extends Error {
  redirectUrl: string = '/404';
  notFound: boolean = false;
}

export class NotFoundException extends ApiException {
  name = 'NotFoundError';
  message = '페이지를 찾을 수 없습니다.';
  notFound = true;
}

export class ForbiddenException extends ApiException {
  name = 'ForbiddenError';
  message = '인증 처리에 실패하였습니다.';
  redirectUrl = '/error';
}

export class AuthorizationException extends ApiException {
  name = 'AuthError';
  message = '인증되지 않은 사용자입니다.';
  redirectUrl = '/error';
}

export class NotAllowedMethodException extends ApiException {
  name = 'NotAllowedMethodError';
  message = '허용되지 않은 요청 입니다.';
  redirectUrl = '/404';
}
