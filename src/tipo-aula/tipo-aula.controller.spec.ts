import { Test, TestingModule } from '@nestjs/testing';
import { TipoAulaController } from './tipo-aula.controller';

describe('TipoAulaController', () => {
  let controller: TipoAulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoAulaController],
    }).compile();

    controller = module.get<TipoAulaController>(TipoAulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
