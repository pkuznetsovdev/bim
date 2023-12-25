import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import { User, UserRoles } from "./types";

type UserCreationAttributes = Optional<User, "id">;

export const getUserModel = (sequelize: Sequelize) =>
  sequelize.define<Model<User, UserCreationAttributes>>("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: Object.values(UserRoles),
      defaultValue: UserRoles.User,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  });
