import { DBService } from "@app/models/sequelize";
import { removeEmptyKeys } from "@app/utils";
import { User } from "./types";

export class UserService extends DBService<User> {
  async create(newUser: Exclude<User, "id">) {
    try {
      return await this.models.User.create(newUser);
    } catch (e) {
      return e;
    }
  }

  async update(id: User["id"], newUserParams: Partial<User>) {
    try {
      const paramsToUpdateWith = removeEmptyKeys(newUserParams);
      return await this.models.User.update(paramsToUpdateWith, {
        where: { id },
      });
    } catch (e) {
      return e;
    }
  }

  async remove(id: User["id"]) {
    try {
      return await this.models.User.destroy({ where: { id } });
    } catch (e) {
      return e;
    }
  }

  async get(userId: User["id"]) {
    try {
      return await this.models.User.destroy({ where: { userId } });
    } catch (e) {
      return e;
    }
  }

  async search(params: Partial<User>) {
    try {
      const filteredParams = removeEmptyKeys(params);
      if (filteredParams && Object.keys(filteredParams).length !== 0) {
        return await this.models.User.findAll({
          where: filteredParams,
        });
      }
      return [];
    } catch (e) {
      return e;
    }
  }

  async getAll() {
    try {
      return await this.models.User.findAll();
    } catch (e) {
      return e;
    }
  }
}
