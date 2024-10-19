import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './@share/config/@config.module';
import { RouterModule } from './router/router.module';
import { PrismaModule } from './@share/database/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), RouterModule.forRoot(), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
