import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { DBConnectionService } from 'src/services/dbService';

@Controller('songs')
export class SongsController {
  constructor(private db: DBConnectionService) {}
  @Get('year')
  async songsByYear(
    @Query('year') year: number,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return await this.db.getSongByYear(year);
  }

  @Get(':id')
  async songsByID(@Param('id') id: number) {
    return await this.db.getSongByID(id);
  }
  @Get()
  async songs() {
    return await this.db.getAllSongs();
  }
}
