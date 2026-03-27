import { ConflictException, Injectable } from '@nestjs/common';
import { usu_usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { contains } from 'class-validator';

@Injectable()
export class UsuarioService {

    constructor(private readonly prismaService: PrismaService) { }

    async createUser(data: CreateUserDto): Promise<usu_usuario> {

        const usuarioExistente = await this.prismaService.usu_usuario.findUnique({
            where: { usu_email: data.usu_email }
        });

        if (usuarioExistente) {
            throw new ConflictException('Usuário já cadastrado');
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

    async findOneByEmail(usu_email: string) {
        return this.prismaService.usu_usuario.findUnique({
            where: { usu_email }
        })
    }

    async findProfessor(): Promise<usu_usuario[]> {
        return this.prismaService.usu_usuario.findMany({
            where: {
                id_tipo_usuario: 5,
            }
        })
    }

    async getPerfilProfessor(id:number){
        const professor = await this.prismaService.usu_usuario.findUnique({where: {usu_id: id}});

        if (!professor) {
             throw new Error("Professor não encontrado");
        }

        return{
            nome: professor?.usu_nome,
            fotoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150",
            status: professor?.usu_status,

        }
    }

    async getAlunos(): Promise<usu_usuario[]> {
        return this.prismaService.usu_usuario.findMany({
            where: {
                id_tipo_usuario: 4,
            }
        })
    }
}
