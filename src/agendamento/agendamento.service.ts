import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { age_agendamento } from '@prisma/client';

@Injectable()
export class AgendamentoService {
    constructor(private readonly prismaService: PrismaService) { }

    async createAgendamento(data: CreateAgendamentoDto): Promise<age_agendamento> {
        return this.prismaService.age_agendamento.create({
            data: {
                ...data,
                age_data_inicio: new Date(data.age_data_inicio),
                age_data_fim: new Date(data.age_data_fim)
            }
        })
    }

    async findAllAgendamentos(): Promise<age_agendamento[]> {
        return this.prismaService.age_agendamento.findMany({
            include: {
                usuario: true,
            }
        });
    }

    // async buscaAgendamentoStatus(status: string) {
    //     return this.prismaService.age_agendamento.findMany({
    //         where: {
    //             age_status: {
    //                 contains: status,
    //             }
    //         }
    //     })
    // }
}

