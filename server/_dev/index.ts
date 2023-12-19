import {AppConfig} from "config";
import {addCities, addPets, addUsers} from "./db";

export async function initDevHelpers(config: AppConfig) {
    await addCities(config)
    await addUsers(config)
    await addPets(config)
}