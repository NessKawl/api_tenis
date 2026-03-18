import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoAulaModule } from './tipo-aula/tipo-aula.module';
import { QuadraModule } from './quadra/quadra.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsuarioModule, TipoAulaModule, QuadraModule, AgendamentoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
