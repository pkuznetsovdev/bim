import {CityService, UserService} from "@app/services";
import {AppConfig} from "config";
import {PetService} from "@app/services/PetService";
import user from "@app/routes/user";
import {DEV_UTILS} from "@dev/utils";
import * as console from "console";

export async function addCities(config: AppConfig) {
    const cityService = new CityService(config.postgres.client);

    const res = await cityService.getAllCities();
    if (Array.isArray(res) && res.length) {
        return;
    }

    const cities = [
        {
            "name": "Moscow"
        },
        {
            "name": "Saint-Petersburg"
        },
        {
            "name": "Petrozavodsk"
        }
    ] as const;

    for (const city of cities) {
        await cityService.createCity(city);
    }

    config.log.info("DB filled with test cities");
}

export async function addUsers(config: AppConfig) {
    const userService = new UserService(config.postgres.client);
    const usersFromDb = await userService.getAllUsers();

    const users = [
        "Alex",
        "John",
        "Jack",
    ] as const;

    if (!Array.isArray(usersFromDb) || !usersFromDb.length) {
        for (const user of users) {
            await userService.createUser({
                firstName: user,
                lastName: "Smith",
                email: `${user}@gmail.com`,
                password: user,
            });
        }

        config.log.info("DB filled with test users");
    }
    const test = await userService.getCurrentDevUser({ name: users[0] });

    // @ts-ignore
    DEV_UTILS.useCurrentUserId.set(test?.id as string);
}

export async function addPets(config: AppConfig) {
    const petService = new PetService(config.postgres.client);

    const petsDB = await petService.getAllPets();
    const userId = DEV_UTILS.useCurrentUserId.get();

    if ((!Array.isArray(petsDB) || !petsDB.length) && userId) {
        const pets: NSPet.create[] = [
            {
                type: 'dog',
                breed: 'husky',
                name: 'Sati',
                userId,
            },
            {
                type: 'cat',
                breed: 'unknown',
                name: 'Bonya',
                userId,
            },
        ];

        for (const pet of pets) {
           const petDB =  await petService.createPet(pet);

            config.log.warn("userId", userId);
            config.log.warn("petDB", petDB);
        }

        config.log.info("DB filled with test pets");
    }
}