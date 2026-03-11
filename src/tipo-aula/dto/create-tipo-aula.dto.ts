import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum } from 'class-validator';
import { StatusUsuario } from '@prisma/client';

export class CreateTipoAulaDto {
    @IsString()
    @IsNotEmpty()
    tia_nome: string;

    @IsString()
    @IsNotEmpty()
    tia_modalidade: string;

    @IsNumber()
    @IsNotEmpty()
    tia_valor: number;

    @IsNumber()
    @IsNotEmpty()
    id_professor: number;
}