import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { age_agendamento } from '@prisma/client';

@Injectable()
export class AgendamentoService {
    constructor(private readonly prismaService: PrismaService) { }

    async createAgendamento(data: CreateAgendamentoDto): Promise<age_agendamento> {
        return this.prismaService.age_agendamento.create({
            data,
        })
    }

    async findAllAgendamentos(): Promise<age_agendamento[]> {
        return this.prismaService.age_agendamento.findMany()
    }
}

