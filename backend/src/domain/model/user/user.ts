import { UserEmail } from './userEmail'
import { UserPassword } from './userPassword'

export class User {
  private _email!: UserEmail
  private _password!: UserPassword

  static newInstance() {
    return new User()
  }

  userEmail() {
    return this._email
  }

  userPassword() {
    return this._password
  }
}