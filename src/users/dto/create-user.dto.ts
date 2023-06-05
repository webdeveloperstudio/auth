import { SoftwareEnum } from "src/common/enums/software.enum";

export class CreateUserDto {
    fname: string;
    lname: string;
    phone: string;
    sex: string;
    software: SoftwareEnum;
    email: string;
    password: string;
}
