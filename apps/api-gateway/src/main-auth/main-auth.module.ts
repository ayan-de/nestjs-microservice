import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MainAuthController } from './main-auth.controller';
import { MainAuthService } from './main-auth.service';

@Module({
  providers: [MainAuthService],
  controllers: [MainAuthController],
  imports: [
    ClientsModule.register([
      {
        name: 'MAIN_AUTH_CLIENT',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
})
export class MainAuthModule {}
