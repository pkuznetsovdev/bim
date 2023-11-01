import pg from "pg";
const client = new pg.Client();

client.connect((err) => {
    // client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
    //     console.log(err ? err.stack : res.rows[0].message) // Hello World!
    //     client.end()
    // })
})

const text = 'INSERT INTO users(email) VALUES($1, $2) RETURNING *'
const values = ['test@gmail.com']

const request = () => new Promise<{ rows: Array<string>}>((resolve, reject) => {
    client.query({ text, values }, function(err, result) {
        if (err) {
            return reject(err);
        } else {
            if (result.rowCount > 0) {
                return resolve({ rows: ['true']});
            }
        }
        return resolve({ rows: ['false']});
    });
})

request().then(res => res.rows[0]).catch(e => console.log(e));
