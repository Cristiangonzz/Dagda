import {  IsEmail, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegistrarUsuarioDto {

    @ApiProperty()
    @IsString()
    primer_nombre: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    segundo_nombre?: string;

    @ApiProperty()
    @IsString()
    primer_apellido: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    segundo_apellido?: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    telefono: number;

    
    @ApiProperty()
    @IsString()
    @IsOptional()
    foto?: string;

    @ApiProperty()
    @IsString()
    usuario: string;

    @ApiProperty()
    @IsString()
    clave: string;

    
    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    
}
