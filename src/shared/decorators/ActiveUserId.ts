import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';

const ActiveUserId = createParamDecorator((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  const userId = request['userId'];

  if (!userId) {
    throw new UnauthorizedException('Missing active user id.');
  }

  return userId;
});

export { ActiveUserId };
