import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoAulaModule } from './tipo-aula/tipo-aula.module';
import { QuadraModule } from './quadra/quadra.module';

@Module({
  imports: [PrismaModule, UsuarioModule, TipoAulaModule, QuadraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
