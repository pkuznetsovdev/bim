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

  async getMany(params: Partial<User>) {
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

  // async getOne() {
  //     try {
  //         return await this.models.User.findOne({
  //             attributes,
  //         });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async getCurrentDevUser({ name }: { name: string }) {
  //     try {
  //         return await this.models.User.findOne({
  //             where: { firstName: name },
  //             attributes,
  //         });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async createUser({firstName, lastName, email, password}: NSUser.create) {
  //     try {
  //         return await this.models.User.create({
  //             firstName, lastName, email, password
  //         });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async updateUser(params: NSUser.update) {
  //     try {
  //         const id = DEV_UTILS.useCurrentUserId.get();
  //         const paramsToUpdateWith = removeEmptyKeys(params);
  //         return await this.models.User.update(paramsToUpdateWith, { where: { id } });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async removeUser() {
  //     try {
  //         const id = DEV_UTILS.useCurrentUserId.get();
  //         return await this.models.User.destroy({ where: { id } });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async getAllUsers() {
  //     try {
  //         return await this.models.User.findAll({
  //             attributes,
  //         });
  //     } catch (e) {
  //         return e;
  //     }
  // }
  //
  // async searchUsers(params: NSUser.get) {
  //     try {
  //         const filteredParams = removeEmptyKeys(params);
  //         if (filteredParams && Object.keys(filteredParams).length !== 0) {
  //             return await this.models.User.findAll({
  //                 where: filteredParams,
  //                 attributes,
  //             });
  //         } else {
  //             return [];
  //         }
  //     } catch (e) {
  //         return e;
  //     }
  // }
}
