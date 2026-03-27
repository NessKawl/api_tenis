import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum, IsOptional } from 'class-validator';
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

    @IsOptional()
    @IsString()
    usu_cpf?: string;

    @IsEnum(StatusUsuario)
    usu_status: StatusUsuario;

    @IsNumber()
    id_tipo_usuario: number;
}