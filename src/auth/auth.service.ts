import { sign, verify } from "jsonwebtoken";
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from "./model/user.model";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()

export class AuthService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async login(username: string, password: string) {
        const user = await this.userModel.findOne(
            {
                where: {
                    username: username
                }
            }
        )

        let token = "key";
        // let User = {
        //     username: 'hi',
        //     password: '123',
        // };

        if (username == username && password == password) {
            token = sign({ id: username }, "gvhdbfh",
                {
                    expiresIn: "60m",
                }
            );

            console.log(token)
            return {
                username: username,
                token: token,
            }
        } else {
            throw new HttpException('LOl', 403);
        }
    }

    async signup(body) {
        const hash = await bcrypt.hash(body.password, 10);
        const user = await this.userModel.create({
            username: body.username,
            phone: body.phone,
            email: body.email,
            password: hash
        })
        const token = jwt.sign({ id: user.id }, 'secret');
        return { token };
    }
    catch(error) {
        throw new HttpException('Could not create user', 500);
    }

    async getMe(id: String) {
        return await this.userModel.findOne({
            where: {
                username: id
            }
        });
    }
}








