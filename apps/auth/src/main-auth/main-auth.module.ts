import { Module } from '@nestjs/common';
import { MainAuthController } from './main-auth.controller';
import { MainAuthService } from './main-auth.service';

@Module({
  controllers: [MainAuthController],
  providers: [MainAuthService]
})
export class MainAuthModule {}
