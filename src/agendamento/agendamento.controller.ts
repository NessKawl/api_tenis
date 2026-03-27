import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { age_agendamento } from '@prisma/client';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Controller('agendamento')
export class AgendamentoController {

    constructor(private agendamentoService: AgendamentoService) { }

    @Get('all')
    async findAllQuadras(): Promise<age_agendamento[]> {
        return this.agendamentoService.findAllAgendamentos();
    }

    @Get('today')
    async findAgendamentoToday(): Promise<age_agendamento[]> {
        return this.agendamentoService.findAgendamentoToday();
    }

    @Post('register')
    async createQuadra(@Body() createAgendamentoDto: CreateAgendamentoDto) {
        return this.agendamentoService.createAgendamento(createAgendamentoDto);
    }
}
