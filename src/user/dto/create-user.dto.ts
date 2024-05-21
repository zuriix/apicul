import {IsEmail, IsNotEmpty, MinLength, MaxLength} from "class-validator";

export class CreateUserDto {
    @IsEmail({},{message: 'Formato de email inválido'})
    email:string;
    
    @MinLength(10, {message: "Mínimo 10 Caracteres"})

    @MaxLength(15, {message: "Máximo 15 caracteres"})
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

}
