import {ApiResource} from "./resource";
import {BASE_URL} from "./constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiResourceSerializer} from "@app/core/api/serializer";
import {catchError, map, throwError, Observable, of} from "rxjs";

export class ApiService<Resource extends ApiResource> {
  private apiPath = `${this.url}/${this.endpoint}`

  constructor(
    private httpClient: HttpClient,
    private url: string = BASE_URL,
    private endpoint: string,
    private serializer: ApiResourceSerializer<Resource>) {
  }

  public create(item: Resource): Observable<Resource> {
    return this.httpClient.post<Resource>(this.apiPath, this.serializer.toJson(item))
      .pipe(catchError(this.handleApiError))
      // .pipe(map(data => this.serializer.fromJson(data) as Resource));
      .pipe(map(data => data as Resource));
  }

  public update(item: Resource): Observable<Resource> {
    return this.httpClient.put<Resource>(`${this.apiPath}/${item.id}`, this.serializer.toJson(item))
      .pipe(catchError(this.handleApiError))
      // .pipe(map(data => this.serializer.fromJson(data)));
      .pipe(map(data => data));
  }

  public read(id?: Resource['id'], { subPath }: Partial<{ subPath: string }> = {} ): Observable<Resource> {
    const resourcePath = `${this.apiPath}/${id}${subPath}`;

    return this.httpClient.get(resourcePath)
      .pipe(catchError(this.handleApiError))
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }

  public list(queryOptions: HttpParams): Observable<Resource[]> {
    return this.httpClient.get(this.apiPath, {params: queryOptions, // TODO: fix for nested objects
      })
      .pipe(catchError(this.handleApiError))
      .pipe(map((data: any) => this.convertItems(data.items)));
  }

  public delete(id: Resource['id']) {
    return this.httpClient
      .delete(`${this.apiPath}/${id}`)
      .pipe(catchError(this.handleApiError));
  }

  private convertItems(items: Resource[]): Resource[] {
    // return items.map(item => this.serializer.fromJson(item));
    return items.map(item => item);
  }

  private handleApiError(e: any) {
    // TODO: handle API error
    // return throwError(e);
    return of({} as Resource);
  }
}
