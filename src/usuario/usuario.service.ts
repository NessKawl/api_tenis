import { ConflictException, Injectable } from '@nestjs/common';
import { usu_usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

    constructor(private readonly prismaService: PrismaService) { }

    async createUser(data: CreateUserDto): Promise<usu_usuario> {

        const usuarioExistente = await this.prismaService.usu_usuario.findUnique({
            where: { usu_cpf: data.usu_cpf }
        });

        if (usuarioExistente) {
            throw new ConflictException('Telefone já cadastrado');
        }

        const hashPassword = await bcrypt.hash(data.usu_senhaHash, 10);


        return this.prismaService.usu_usuario.create({
            data: {
                ...data,

                usu_senhaHash: hashPassword
            }
        })
    }

    async findAllUsers(): Promise<usu_usuario[]> {
        return this.prismaService.usu_usuario.findMany()
    }

}
