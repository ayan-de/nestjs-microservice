import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //message pattern - domainName.operationName
  @MessagePattern('users.findAll')
  findAll() {
    return this.usersService.findAll();
  }
}
