import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    //connecting users service to api-gateway
    ClientsModule.register([
      {
        name: 'USER_CLIENT',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
})
export class UsersModule {}
