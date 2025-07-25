import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Title 1',
      author: 'Author 1',
      rating: 3.9,
    },
    {
      id: 2,
      title: 'Title 2',
      author: 'Author 2',
      rating: 4.7,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book ${updateBookDto.author} ${updateBookDto.rating}`;
  }

  remove(id: number) {
    this.books = this.books.filter((item) => item.id !== id);
    return this.books;
  }
}
