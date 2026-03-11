import { Test, TestingModule } from '@nestjs/testing';
import { QuadraController } from './quadra.controller';

describe('QuadraController', () => {
  let controller: QuadraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuadraController],
    }).compile();

    controller = module.get<QuadraController>(QuadraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
