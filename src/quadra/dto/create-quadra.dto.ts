import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum } from 'class-validator';
import { StatusQuadra } from '@prisma/client';

export class CreateQuadraDto {
    @IsString()
    @IsNotEmpty()
    qua_nome: string;

    @IsEnum(StatusQuadra)
    usu_status: StatusQuadra;
}