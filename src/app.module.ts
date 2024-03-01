import { Module } from '@nestjs/common';
import { SongsController } from './controller/songs.controller';
import { DBConnectionService } from './services/dbService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
  ],
  controllers: [SongsController],
  providers: [DBConnectionService],
})
export class AppModule {}
