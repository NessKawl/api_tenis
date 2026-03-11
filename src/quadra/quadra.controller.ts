import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuadraService } from './quadra.service';
import { qua_quadra } from '@prisma/client';
import { CreateQuadraDto } from './dto/create-quadra.dto';

@Controller('quadra')
export class QuadraController {
    constructor(private quadraService: QuadraService) { }

    @Get('all')
    async findAllQuadra(): Promise<qua_quadra[]> {
        return this.quadraService.findAllQuadra()
    }

    @Post('register')
    async createQuadra(@Body() createQadraDto: CreateQuadraDto) {
        return this.quadraService.createQuadra(createQadraDto)
    }
}
