import { Test, TestingModule } from '@nestjs/testing';
import { QuadraService } from './quadra.service';

describe('QuadraService', () => {
  let service: QuadraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuadraService],
    }).compile();

    service = module.get<QuadraService>(QuadraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
