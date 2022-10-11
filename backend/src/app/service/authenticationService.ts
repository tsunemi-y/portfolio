import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import jweConfig from '../../config/jwt' 
import userRepository from "../../infrastructure/datasource/user/userDatasource"

class AuthenticationService {

  // ユーザ取得（ログイン判定に使用）
  findForLogin(email: string, password: string): Promise<any> {
    return userRepository.findForLogin(email, password)
  }

  // jwtトークン認証
  verifyToken(req: Request, res: Response, next: NextFunction) {

    // ヘッダーからトークン取得
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]

    if (token) {
      jwt.verify(token, jweConfig.SECRET_KEY, function(error, decodedToken: any) {
        if (error) {
          return res.status(403).send({
            message:'認証に失敗しました。'
          })
        }

        // レコードしたものでdb接続し、認証
        const email = decodedToken.email
        const password = decodedToken.password
        const user = userRepository.findForLogin(email, password)
        if (!user) {
          return res.status(403).send({
            message:'認証に失敗しました。'
          })
        }

        next()
      })
    } else {
      // headersのauthorizationにトークンがない場合
      return res.status(401).send({
        message:'トークンがありません。'
      }) 
    }
  }

  // jwtからユーザ情報取得
  getUserInfoByJwt(token: string | undefined) {
    let decodedToken: any = ''
    if (token) {
      decodedToken = jwt.verify(token, jweConfig.SECRET_KEY)
    }


    return decodedToken
  }

}

export default new AuthenticationService()