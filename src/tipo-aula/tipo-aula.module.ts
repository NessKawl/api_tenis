import { Module } from '@nestjs/common';
import { TipoAulaController } from './tipo-aula.controller';
import { TipoAulaService } from './tipo-aula.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoAulaController],
  providers: [TipoAulaService, PrismaService]
})
export class TipoAulaModule { }
