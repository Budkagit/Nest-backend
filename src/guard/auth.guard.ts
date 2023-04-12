import {
    ExecutionContext,
    HttpException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';

// import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserAuthGuard {
    async canActivate(context: ExecutionContext) {
        try {
            let req: any = context.switchToHttp().getRequest();
            const headers = context.switchToHttp().getRequest().headers;
            if (!headers.authorization) throw 'Header error';

            const [prefix, token] = headers.authorization.split(' ');
            if (prefix !== 'Bearer') throw 'Header error';
            const decode = verify(token, 'gvhdbfh') as any;
            if (!decode) throw 'Token undefiened';

            req.user = {
                id: decode.userId,
            };
            return true;
        } catch (e) {
            console.log(e);
            throw new HttpException('UNAUTHORIZED_ERROR', 401);
        }
    }
}




