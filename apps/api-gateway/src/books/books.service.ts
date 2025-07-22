import { Inject, Injectable } from '@nestjs/common';
import {
  BookDto,
  BOOKS_PATTERNS,
  CreateBookDto,
  UpdateBookDto,
} from '@app/contracts';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_CLIENT } from './constant';

@Injectable()
export class BooksService {
  constructor(@Inject(BOOKS_CLIENT) private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send<BookDto, CreateBookDto>(
      BOOKS_PATTERNS.CREATE,
      createBookDto,
    );
  }

  findAll() {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send<BookDto, UpdateBookDto>(
      BOOKS_PATTERNS.UPDATE,
      {
        ...updateBookDto,
      },
    );
  }

  remove(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.REMOVE, id);
  }
}
