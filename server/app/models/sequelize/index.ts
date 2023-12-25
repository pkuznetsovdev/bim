import { Sequelize } from "sequelize";
import { getUserModel } from "@app/models";

export * from "./service";

export default (sequelize: Sequelize) => {
  getUserModel(sequelize);

  // const City = sequelize.define('City', {
  //     id: {
  //         type: DataTypes.UUID,
  //         defaultValue: DataTypes.UUIDV4,
  //         primaryKey: true,
  //     },
  //     name: {
  //         type: DataTypes.STRING,
  //         allowNull: false,
  //     },
  // })
  //
  // const Pet = sequelize.define('Pet', {
  //     id: {
  //         type: DataTypes.UUID,
  //         defaultValue: DataTypes.UUIDV4,
  //         primaryKey: true,
  //     },
  //     type: {
  //         type: DataTypes.STRING,
  //         allowNull: false,
  //     },
  //     breed: {
  //         type: DataTypes.STRING,
  //         defaultValue: 'unknown',
  //         allowNull: false,
  //     },
  //     age: {
  //         type: DataTypes.INTEGER,
  //     },
  //     name: {
  //         type: DataTypes.STRING,
  //     },
  //     description: {
  //         type: DataTypes.TEXT,
  //     },
  //     photos: DataTypes.ARRAY(DataTypes.STRING),
  // })
  //
  // User.hasMany(Pet, {
  //     foreignKey: {
  //         allowNull: false,
  //     }
  // });
  // Pet.belongsTo(User);

  sequelize.sync({ alter: true });
};
