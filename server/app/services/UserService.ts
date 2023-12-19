import Models from 'models/sequelize';
import {Sequelize, where} from "sequelize";
import {removeEmptyKeys} from "@app/utils";
import {DEV_UTILS} from "@dev/utils";

const attributes = {exclude: ['password']};

export class UserService {
    private client: Sequelize;
    private models: Sequelize['models'];

    constructor(sequelize: Sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async getUser() {
        try {
            return await this.models.User.findOne({
                attributes,
            });
        } catch (e) {
            return e;
        }
    }

    async getCurrentDevUser({ name }: { name: string }) {
        try {
            return await this.models.User.findOne({
                where: { firstName: name },
                attributes,
            });
        } catch (e) {
            return e;
        }
    }

    async createUser({firstName, lastName, email, password}: NSUser.create) {
        try {
            return await this.models.User.create({
                firstName, lastName, email, password
            });
        } catch (e) {
            return e;
        }
    }

    async updateUser(params: NSUser.update) {
        try {
            const id = DEV_UTILS.useCurrentUserId.get();
            const paramsToUpdateWith = removeEmptyKeys(params);
            return await this.models.User.update(paramsToUpdateWith, { where: { id } });
        } catch (e) {
            return e;
        }
    }

    async removeUser() {
        try {
            const id = DEV_UTILS.useCurrentUserId.get();
            return await this.models.User.destroy({ where: { id } });
        } catch (e) {
            return e;
        }
    }

    async getAllUsers() {
        try {
            return await this.models.User.findAll({
                attributes,
            });
        } catch (e) {
            return e;
        }
    }

    async searchUsers(params: NSUser.get) {
        try {
            const filteredParams = removeEmptyKeys(params);
            if (filteredParams && Object.keys(filteredParams).length !== 0) {
                return await this.models.User.findAll({
                    where: filteredParams,
                    attributes,
                });
            } else {
                return [];
            }
        } catch (e) {
            return e;
        }
    }

}

export interface IUserService extends UserService {
}