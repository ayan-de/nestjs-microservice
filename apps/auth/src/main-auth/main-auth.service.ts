import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';

@Injectable()
export class MainAuthService {
  private users: UserDto[] = [
    {
      id: 1000,
      email: 'ayan@mail.com',
      marks: 1000,
    },
  ];

  findAll() {
    return this.users;
  }
}
