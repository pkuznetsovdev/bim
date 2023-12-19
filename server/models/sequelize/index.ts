import {Sequelize, DataTypes,} from 'sequelize';
import {ForeignKey} from "sequelize-typescript";

export default (sequelize: Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {})

    const City = sequelize.define('City', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    const Pet = sequelize.define('Pet', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            defaultValue: 'unknown',
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        photos: DataTypes.ARRAY(DataTypes.STRING),
    })

    User.hasMany(Pet, {
        foreignKey: {
            allowNull: false,
        }
    });
    Pet.belongsTo(User);

    sequelize.sync();
}