import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

    @Get('professor')
    async findProfessor(): Promise<usu_usuario[]> {
        return this.usuarioService.findProfessor()
    }

    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usuarioService.createUser(createUserDto)
    }

    @Get('professor/:id')
    async getPerfilProfessor(@Param('id') id: string) {
        return this.usuarioService.getPerfilProfessor(Number(id));
    }


    @Get('alunos')
    async getAlunos(): Promise<usu_usuario[]> {
        return this.usuarioService.getAlunos();
    }
}
