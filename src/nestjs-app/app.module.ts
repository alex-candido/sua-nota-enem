import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nest/@share/config/@config.module';
import { RouterModule } from '@nest/router/router.module';

@Module({
  imports: [ConfigModule.forRoot(), RouterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
