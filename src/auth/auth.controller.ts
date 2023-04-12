import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserAuthGuard } from 'src/guard/auth.guard';

@Controller('auth')

export class AuthController {
    constructor(private readonly authService: AuthService
    ) { }
    @Post('login')
    logn(@Body() data) {
        console.log(data)
        return this.authService.login(data.username, data.password)
    }
    @Post('signup')
    async signup(
        @Body()
        body: {
            username: string;
            phone: string;
            email: string;
            password: string
        },

    ): Promise<{ token: string; }> {
        return this.authService.signup(body);
    };

    @UseGuards(UserAuthGuard)

    @Get('home/:id')
    async getMe(@Param('id') id: String) {
        return this.authService.getMe(id)
    }

}
