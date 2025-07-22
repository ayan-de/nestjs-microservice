import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule } from '@nestjs/microservices';
import { BOOKS_CLIENT } from './constant';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    ClientsModule.registerAsync([
      {
        name: BOOKS_CLIENT,
        imports: [ClientConfigModule],
        useFactory: (clientConfig: ClientConfigService) => ({
          ...clientConfig.booksClientOptions,
        }),
        inject: [ClientConfigService],
      },
    ]),
  ],
})
export class BooksModule {}
