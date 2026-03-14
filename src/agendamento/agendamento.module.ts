import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AgendamentoService, PrismaService],
  controllers: [AgendamentoController]
})
export class AgendamentoModule {}
