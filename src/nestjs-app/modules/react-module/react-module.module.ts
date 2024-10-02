import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join, resolve } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(join(__dirname, '../../../../client/', 'dist')),
    }),
  ],
  controllers: [],
  exports: [],
  providers: [],
})
export class ReactModuleModule {}
