import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TypeOrmModule, PrismaModule],
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
