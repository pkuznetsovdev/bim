import {Sequelize} from "sequelize";
import Models from "@app/models/sequelize";
import {IDBService} from "@app/types";

export abstract class DBService<Model extends Record<string, unknown>> implements IDBService<Model> {

    protected client: Sequelize;
    protected models: Sequelize['models'];

    constructor(sequelize: Sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    abstract create(newItem: Partial<Model>): Promise<Partial<Model>> | unknown
    abstract update(id: Model['id'], newItem: Model): Promise<Partial<Model>> | unknown
    abstract remove(id: Model['id']): void

    abstract get(id: Model['id']): Promise<Partial<Model>> | unknown
    abstract getMany(params: Partial<Model>): Promise<Array<Partial<Model>>> | unknown
}