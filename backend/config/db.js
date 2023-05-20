const { Sequelize } = require("sequelize");
// Connection parameters
const sequelize = new Sequelize('postgres://school_admin:qwerty@localhost:5432/schooldb');

const testDbConnection = async () => {
  try {
    console.log('yooooooo')
    await sequelize.authenticate()
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};
module.exports = { sequelize, testDbConnection };
