import {Injectable} from "@angular/core";
import {ApiService, ApiResourceSerializer} from "@app/core/api";
import {User} from "@app/models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

export class UserService extends ApiService<User> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      undefined,
      'pizzas',
      new UserSerializer());
  }
}

export class UserSerializer extends ApiResourceSerializer<User> {

  override fromJson(json: string) {
    const parsed: User = JSON.parse(json);

    return {
      id: parsed.id,
      username: parsed.username,
    };
  }
}
