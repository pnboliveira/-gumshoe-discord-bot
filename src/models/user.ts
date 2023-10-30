import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, Unique, DataType} from 'sequelize-typescript';

@Table
export default class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    username!: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    user_id!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    birthday!: Date;
}
