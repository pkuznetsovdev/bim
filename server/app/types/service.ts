export interface IDBService<Model extends Record<string, unknown>> {
  create(newItem: Partial<Model>): Partial<Model> | unknown;
  update(id: Model["id"], newItem: Partial<Model>): Partial<Model> | unknown;
  remove(id: Model["id"]): void | unknown;
  get(id: Model["id"]): Partial<Model> | unknown;
  getMany(params: Partial<Model>): Array<Partial<Model>> | unknown;
}
