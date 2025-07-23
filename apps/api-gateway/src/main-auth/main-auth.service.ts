import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MainAuthService {
  constructor(
    @Inject('MAIN_AUTH_CLIENT') private mainauthClient: ClientProxy,
  ) {}
  findAll() {
    return this.mainauthClient.send('main-auth.findAll', {});
  }
}
