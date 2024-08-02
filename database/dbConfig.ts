import { DataSource } from "typeorm";
import { Customer } from "./entity/Customer";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "my_database",
    synchronize: true,
    logging: false,
    entities: [Customer]
})

export default dataSource;