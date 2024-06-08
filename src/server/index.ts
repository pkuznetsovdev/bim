import { createServer } from 'miragejs';
import { BASE_API_PATH, API_PATHS } from '@api';
import { db } from './db';

const TIMEOUT = 1000;

createServer({
  routes() {
    this.urlPrefix = BASE_API_PATH;

    /** Auth  */
    this.post(
      API_PATHS.authLocal,
      (schema, request) => {
        const data = JSON.parse(request.requestBody);
        console.log(data);
        return {};
      },
      { timing: TIMEOUT }
    );

    /** Posts  */
    this.get(API_PATHS.posts, (schema, request) => schema.db.posts, {
      timing: TIMEOUT,
    });
  },
  seeds(server) {
    server.db.loadData(db);
  },
});
