import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuadraDto } from './dto/create-quadra.dto';
import { qua_quadra } from '@prisma/client';

@Injectable()
export class QuadraService {
    constructor(private readonly prismaService: PrismaService) { }

    async createQuadra(data: CreateQuadraDto): Promise<qua_quadra> {
        return this.prismaService.qua_quadra.create({
            data,
        })
    }

    async findAllQuadra(): Promise<qua_quadra[]> {
        return this.prismaService.qua_quadra.findMany()
    }
}
