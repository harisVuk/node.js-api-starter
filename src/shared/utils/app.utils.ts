import { injectable } from "inversify";
import { ICredentials } from "../../shared/interfaces/IUser";
import * as bcrypt from "bcryptjs";
import { encode } from "jwt-simple";

@injectable()
export class AppUtils {
saltRounds = 10;

    public hashPassword (password: string): Promise<string> {
        return new Promise<any>((resolve, reject) => {
          bcrypt.hash(password, this.saltRounds, function (err, hash) {
              if (err) {
                  reject(err);
              } else {
                  resolve(hash);
              }
          });
       });
    }

     public comparePasswords (password: string, hash: string): Promise<boolean> {
          return new Promise<boolean>((resolve, reject) => {
              bcrypt.compare(password, hash, function (err, res) {
                  if (err) {
                      reject(err);
                  } else if (res) {
                      resolve(res);
                  }
              });
          });
      }

      public createToken (id: number): Promise<any> {
          return new Promise<any>((resolve, reject) => {
              const payload = { sub: id };
              const token = encode(payload, "123");
              const expires = new Date();
              expires.setMinutes(expires.getMinutes() + 120);
              const result = { token: token, expires_at: new Date(expires).getTime() };
              resolve(result);
          });
      }
 }
