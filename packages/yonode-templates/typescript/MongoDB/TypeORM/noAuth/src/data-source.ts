import "reflect-metadata";
import { DataSource } from "typeorm";
import { EntityName } from "./entity/Entity";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [EntityName],
  migrations: [],
  subscribers: [],
});
AppDataSource.initialize()
  .then(async () => {
    console.log(
      `${chalk.green.bold("Successfully")} connected to the database`
    );
  })
  .catch((error) =>
    console.log(
      `${chalk.red.bold("Failed")} to connect to the database: ${error}`
    )
  );
export default AppDataSource;
