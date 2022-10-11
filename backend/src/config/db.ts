import pg from 'pg'

const db = new pg.Pool({
    host: "localhost",
    database: "root",
    user: "root",
    port: 5433,
    password: "pass"
  })    

db.connect()

export default db