import { Body, Controller, Post } from "@nestjs/common"
import { Request } from "express";
import { AuthService } from "./auth.service";

@Controller('auth') // main route, controllers hangle the requests and responses
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: any) {
        console.log({dto})
        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}