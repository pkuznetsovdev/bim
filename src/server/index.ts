import { createServer, Response } from 'miragejs';
import { BASE_API_PATH, API_PATHS } from '@api';
import { db } from './db';
import { getUserDetails } from './utils';

const TIMEOUT = 1000;

createServer({
  routes() {
    this.urlPrefix = BASE_API_PATH;

    /** Auth  */
    this.post(
      API_PATHS.authLocal,
      (schema, request) => {
        const { data } = JSON.parse(request.requestBody);
        const userDB = schema.db.users.findBy({ email: data.email });

        if (userDB) {
          const isPasswordCorrect = userDB.password === data.password;
          if (isPasswordCorrect) {
            return {
              details: getUserDetails(userDB),
              isAuthorized: true,
            };
          }
        }

        return new Response(
          401,
          { some: 'header' },
          { errors: ['Credentials are incorrect'] }
        );
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
