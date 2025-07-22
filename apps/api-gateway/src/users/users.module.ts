import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  providers: [
    UsersService,
    {
      provide: 'USER_CLIENT',
      useFactory: (clientConfig: ClientConfigService) => {
        const clientOptions = clientConfig.usersClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
  controllers: [UsersController],
  imports: [ClientConfigModule],
})
export class UsersModule {}
