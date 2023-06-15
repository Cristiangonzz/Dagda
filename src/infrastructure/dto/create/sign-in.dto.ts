import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class SignInDto{
    @ApiProperty()
    @IsEmail()
    email:string;
    
    @ApiProperty()
    @IsString()
    clave:string;
}