import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BOOKS_CLIENT } from './constant';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: BOOKS_CLIENT,
      useFactory: (clientConfig: ClientConfigService) => {
        const clientOptions = clientConfig.booksClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
  imports: [ClientConfigModule],
})
export class BooksModule {}
