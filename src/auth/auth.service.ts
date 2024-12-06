import { ForbiddenException, Injectable } from "@nestjs/common"
import { User, Bookmark } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from "argon2"
import { error } from "console"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

@Injectable() // service handles business logic, the actual execution
export class AuthService {
    constructor(private prisma: PrismaService) {

    }
    async signin (dto: AuthDto) {
        // find the user by email
        // if user does not exist, throw exception

        // compare password
        // if password incorrect, throw exception

        // send back the user
        return {msg: 'signed in'}
    }
    async signup (dto: AuthDto) {
        // generate a password hash
        try {
            const hash = await argon.hash(dto.password)
            // save the new user int the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                }
            })

            delete user.hash

            //return the saved user
            return user
        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    throw new ForbiddenException('Credentials taken')
                }
            }
            throw error
        }
    }
}