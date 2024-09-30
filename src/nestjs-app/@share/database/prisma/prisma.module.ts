import { Global, Module } from '@nestjs/common';
import { PrismaService } from './implementations/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
