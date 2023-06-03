import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class SignInDto {
    @IsNotEmpty({
        message: 'Identity Number is required'
    })
    @MinLength(6, {
        message: 'Identity Number min length is 6'
    })
    @MaxLength(20, {
        message: 'Identity Number max length is 20'
    })
    public readonly identity: string;

    @IsNotEmpty({
        message: 'Password is required'
    })
    readonly password: string;

    public expiresIn: number;
}