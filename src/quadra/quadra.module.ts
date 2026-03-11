import { Module } from '@nestjs/common';
import { QuadraService } from './quadra.service';
import { QuadraController } from './quadra.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QuadraController],
  providers: [QuadraService, PrismaService]

})
export class QuadraModule { }
