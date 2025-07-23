import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserAuthModule } from './user-auth/user-auth.module';
import { MainAuthModule } from './main-auth/main-auth.module';

@Module({
  imports: [AuthModule, UserAuthModule, MainAuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
