import {DataSource, DataSourceOptions} from 'typeorm';
import {config} from 'dotenv'
import { UserEntity } from 'src/users/entities/user.entity';

config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations:['  dist/db/migrations/*{.ts,.js}'],   
    logging: false
}
const dataSource: DataSource = new DataSource(dataSourceOptions);
export default dataSource