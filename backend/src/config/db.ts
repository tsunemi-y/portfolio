import 'dotenv/config'
import pg from 'pg'

const db = new pg.Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT ?? ''),
    password: process.env.DB_PASSWORD,
  })    

db.connect()

export default db