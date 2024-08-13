import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  result?: T[];
  status: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    context.switchToHttp().getResponse().status(200);
    return next.handle().pipe(
      map((data) => {
        const res = {
          code: 200,
          status: 'success',
        };
        let result = null;

        if (data) {
          Array.isArray(data?.data)
            ? (result = { ...data })
            : (result = { data });
        } else {
          result = {};
        }
        return {
          ...res,
          ...result,
        };
      }),
    );
  }
}
