import {ApiResource} from "./resource";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiResourceSerializer} from "@app/core/api/serializer";
import {catchError, map, Observable, throwError} from "rxjs";

export class ApiService<Resource extends ApiResource> {
  private baseApiUrl = '';

  constructor(
    private httpClient: HttpClient,
    private url: string | null,
    private endpoint: string,
    private serializer: ApiResourceSerializer<Resource>) {
  }

  public create(item: Resource): Observable<Resource> {
    return this.httpClient.post<Resource>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(catchError(this.handleApiError))
      .pipe(map(data => this.serializer.fromJson(data) as Resource));
  }

  public update(item: Resource): Observable<Resource> {
    return this.httpClient.put<Resource>(`${this.url}/${this.endpoint}/${item.id}`, this.serializer.toJson(item))
      .pipe(catchError(this.handleApiError))
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  public read(id: Resource['id']): Observable<Resource> {
    return this.httpClient.get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(catchError(this.handleApiError))
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }

  public list(queryOptions: HttpParams): Observable<Resource[]> {
    return this.httpClient.get(`${this.url}/${this.endpoint}`, {params: queryOptions, // TODO: fix for nested objects
      })
      .pipe(catchError(this.handleApiError))
      .pipe(map((data: any) => this.convertItems(data.items)));
  }

  public delete(id: Resource['id']) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`)
      .pipe(catchError(this.handleApiError));
  }

  private convertItems(items: Resource[]): Resource[] {
    return items.map(item => this.serializer.fromJson(item));
  }

  private handleApiError(e: any) {
    console.error(e);
    return throwError(e);
  }

}
