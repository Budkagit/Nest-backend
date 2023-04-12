import { UUIDV4 } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class User extends Model {
  @Column({
    primaryKey: true,
    defaultValue: UUIDV4(),
  })
  id: string;
  @Column
  username: string;
  @Column
  phone: string;
  @Column
  email: string;
  @Column
  password: string
}