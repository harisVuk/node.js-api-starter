import { Model, Table, Column, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { News } from "./News";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  password: string;

  @Column
  email: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => News)
  news: News[];
}