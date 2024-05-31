import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    this.urlPrefix = 'http://localhost:3000';

    this.post('/user/create', (schema, request) => {
      console.log('schema: ', schema);
      console.log('request: ', request);

      return 'response';
    });
  },
});
