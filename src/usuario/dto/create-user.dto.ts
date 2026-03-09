import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum } from 'class-validator';
import { StatusUsuario } from '@prisma/client';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    usu_nome: string;

    @IsString()
    @IsNotEmpty()
    usu_email: string

    @IsString()
    @IsNotEmpty()
    usu_telefone?: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    usu_senhaHash: string;

    @IsString()
    @IsNotEmpty()
    usu_cpf?: string;

    @IsEnum(StatusUsuario)
    usu_status: StatusUsuario;

    @IsNumber()
    id_tipo_usuario: number;
}