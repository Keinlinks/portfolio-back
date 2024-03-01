import { Injectable } from '@nestjs/common';
import { Model, ModelCtor } from 'sequelize';
import { sequelize } from 'src/DBConnection';
import { SongModel } from 'src/models/song.model';

@Injectable()
export class DBConnectionService {
  private modelInstance: ModelCtor<Model<any, any>>;
  constructor() {
    this.modelInstance = SongModel;
  }
  async getAllSongs() {
    let allSongs = await this.modelInstance.findAll();
    return JSON.stringify(allSongs, null, 2);
  }
  async getSongByID(id: number) {
    let idSong = await this.modelInstance.findByPk(id);
    return JSON.stringify(idSong);
  }
  async getSongByYear(year: number) {
    let songsYear = await this.modelInstance.findAll({ where: { year: year } });
    return JSON.stringify(songsYear);
  }
}
