import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum } from 'class-validator';
import { StatusAgendamento } from '@prisma/client';

export class CreateAgendamentoDto {
    @IsString()
    @IsNotEmpty()
    age_data_inicio: string;

    @IsString()
    @IsNotEmpty()
    age_data_fim: string;

    @IsEnum(StatusAgendamento)
    age_status: StatusAgendamento;

    @IsNumber()
    @IsNotEmpty()
    id_usuario: number;

    @IsNumber()
    @IsNotEmpty()
    id_quadra: number;

    @IsNumber()
    @IsNotEmpty()
    id_tipo_aula: number;
}