import { Test, TestingModule } from '@nestjs/testing';
import { TipoAulaService } from './tipo-aula.service';

describe('TipoAulaService', () => {
  let service: TipoAulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoAulaService],
    }).compile();

    service = module.get<TipoAulaService>(TipoAulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
