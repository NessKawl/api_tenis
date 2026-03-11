import { Body, Controller, Get, Post } from '@nestjs/common';
import { TipoAulaService } from './tipo-aula.service';
import { tia_tipo_aula } from '@prisma/client';
import { CreateTipoAulaDto } from './dto/create-tipo-aula.dto';

@Controller('tipoaula')
export class TipoAulaController {
    constructor(private tipoAulaService: TipoAulaService) { }

    @Get('all')
    async findAllTipo(): Promise<tia_tipo_aula[]> {
        return this.tipoAulaService.findAllTipo()
    }

    @Post('register')
    async createTipoAula(@Body() createTipoAulaDto: CreateTipoAulaDto) {
        return this.tipoAulaService.createTipoAula(createTipoAulaDto)
    }
}
