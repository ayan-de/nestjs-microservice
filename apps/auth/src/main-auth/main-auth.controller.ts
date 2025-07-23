import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MainAuthService } from './main-auth.service';

@Controller('main-auth')
export class MainAuthController {
  constructor(private readonly mainauthService: MainAuthService) {}

  @MessagePattern('main-auth.findAll')
  findAll() {
    return this.mainauthService.findAll();
  }
}
