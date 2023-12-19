import Models from 'models/sequelize';
import {Sequelize, where} from "sequelize";
import {removeEmptyKeys} from "@app/utils";

export class CityService {
    private client: Sequelize;
    private models: Sequelize['models'];

    constructor(sequelize: Sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async getCity() {
        try {
            return await this.models.City.findOne();
        } catch (e) {
            return e;
        }
    }

    async createCity({name}: NSCity.create) {
        try {
            return await this.models.City.create({ name });
        } catch (e) {
            return e;
        }
    }

    async updateCity(params: NSCity.update) {
        try {
            const paramsToUpdateWith = removeEmptyKeys(params);
            return await this.models.City.update(paramsToUpdateWith, { where: {}});
        } catch (e) {
            return e;
        }
    }

    async removeCity() {
        try {
            return await this.models.City.destroy();
        } catch (e) {
            return e;
        }
    }

    async getAllCities() {
        try {
            return await this.models.City.findAll();
        } catch (e) {
            return e;
        }
    }

    async searchCities(params: NSCity.get) {
        try {
            const filteredParams = removeEmptyKeys(params);
            if (filteredParams && Object.keys(filteredParams).length !== 0) {
                return await this.models.City.findAll({
                    where: filteredParams,
                });
            } else {
                return [];
            }
        } catch (e) {
            return e;
        }
    }
}

export interface ICityService extends CityService {
}