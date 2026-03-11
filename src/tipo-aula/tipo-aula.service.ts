import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoAulaDto } from './dto/create-tipo-aula.dto';
import { tia_tipo_aula } from '@prisma/client';

@Injectable()
export class TipoAulaService {
    constructor(private readonly prismaService: PrismaService) { }

    async createTipoAula(data: CreateTipoAulaDto): Promise<tia_tipo_aula> {
        return this.prismaService.tia_tipo_aula.create({
            data
        })
    }

    async findAllTipo(): Promise<tia_tipo_aula[]> {
        return this.prismaService.tia_tipo_aula.findMany()
    }

}
