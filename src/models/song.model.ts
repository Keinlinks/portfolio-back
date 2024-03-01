import { DataTypes } from 'sequelize';
import { sequelize } from 'src/DBConnection';

export const SongModel = sequelize.define(
  'Song',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.TEXT,
    },
    url_data: {
      type: DataTypes.TEXT,
    },
    autor: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'SongI',
    createdAt: false,
    updatedAt: false,
  },
);
