import {Request} from "express";

export function getCurrentUserId(params: { req?: Request }) {
    if (params.req && params.req.user) {
        return params.req.user.id;
    }

    return "";
}