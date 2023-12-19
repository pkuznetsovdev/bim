import Models from 'models/sequelize';
import {Sequelize, where} from "sequelize";
import {removeEmptyKeys} from "@app/utils";

export class PetService {
    private client: Sequelize;
    private models: Sequelize['models'];

    constructor(sequelize: Sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async getPet() {
        try {
            return await this.models.Pet.findOne();
        } catch (e) {
            return e;
        }
    }

    async createPet({age, photos, name, type, description, breed, userId }: NSPet.create) {
        try {
            return await this.models.Pet.create({
                age, photos, name, type, description, breed, UserId: userId
            });
        } catch (e) {
            return e;
        }
    }

    async updatePet(params: NSPet.update) {
        try {
            const paramsToUpdateWith = removeEmptyKeys(params);
            return await this.models.Pet.update(paramsToUpdateWith, { where: { } });
        } catch (e) {
            return e;
        }
    }

    async removePet() {
        try {
            return await this.models.Pet.destroy({ where: { } });
        } catch (e) {
            return e;
        }
    }

    async getAllPets() {
        try {
            return await this.models.Pet.findAll();
        } catch (e) {
            return e;
        }
    }

    async searchPets(params: NSPet.get) {
        try {
            const filteredParams = removeEmptyKeys(params);
            if (filteredParams && Object.keys(filteredParams).length !== 0) {
                return await this.models.Pet.findAll({
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

export interface IPetService extends PetService {
}