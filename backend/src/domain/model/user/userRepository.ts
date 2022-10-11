import { User } from "./user";

export interface UserRepository {
  findForLogin(email: string, password: string): void
}