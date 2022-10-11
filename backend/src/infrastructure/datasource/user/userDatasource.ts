import db from '../../../config/db'
import { UserRepository } from './../../../domain/model/user/userRepository'
import { User } from '../../../domain/model/user/user'

class UserDatasource implements UserRepository {

  constructor() {
  }

   async findForLogin(email: string, password: string): Promise<any> {
    const query = `
      SELECT 
      *
      FROM users
      WHERE true
        AND email = $1
        AND password = $2 
    `

    const results = await db.query(query, [email, password])

    return results.rows[0]
  }

}

export default new UserDatasource();