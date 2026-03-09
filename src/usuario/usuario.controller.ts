import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUserDto } from './dto/create-user.dto';
import { usu_usuario } from '@prisma/client';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Get('all')
    async findAllUsers(): Promise<usu_usuario[]> {
        return this.usuarioService.findAllUsers()
    }

    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usuarioService.createUser(createUserDto)
    }

}
