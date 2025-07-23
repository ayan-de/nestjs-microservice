import { Test, TestingModule } from '@nestjs/testing';
import { MainAuthService } from './main-auth.service';

describe('MainAuthService', () => {
  let service: MainAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainAuthService],
    }).compile();

    service = module.get<MainAuthService>(MainAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
