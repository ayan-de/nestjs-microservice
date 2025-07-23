import { Test, TestingModule } from '@nestjs/testing';
import { MainAuthController } from './main-auth.controller';

describe('MainAuthController', () => {
  let controller: MainAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainAuthController],
    }).compile();

    controller = module.get<MainAuthController>(MainAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
