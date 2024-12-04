import { Injectable } from "@nestjs/common"
import { User, Bookmark } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable() // service handles business logic, the actual execution
export class AuthService {
    constructor(private prisma: PrismaService) {

    }
    signin () {
        return {msg: 'signed in'}
    }
    signup () {
        return {msg: 'signed up'}
    }
}