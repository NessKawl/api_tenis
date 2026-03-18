import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/usuario/dto/create-user.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt.guards';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usuarioService: UsuarioService
    ) { }

    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usuarioService.createUser(createUserDto)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req, @Body() loginDto: LoginDto) {
        return this.authService.login(req.user);
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
        return req.user;
    }
} 
