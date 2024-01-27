import {ApiResource} from "./resource";

export class ApiResourceSerializer<Resource extends ApiResource> {
  toJson(r: Resource){
    return JSON.stringify(r);
  };
  fromJson(json: string) { return JSON.parse(json) as Resource };
}
