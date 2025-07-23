import { Controller, Get } from '@nestjs/common';
import { MainAuthService } from './main-auth.service';

@Controller('main-auth')
export class MainAuthController {
  constructor(private mainauthService: MainAuthService) {}

  @Get()
  findAll() {
    return this.mainauthService.findAll();
  }
}
