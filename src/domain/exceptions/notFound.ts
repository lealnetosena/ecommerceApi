import { IException } from "./IException";

export class NotFoundException implements IException{
    statusCode: number = 404;
    message: string

    constructor(message: string){
        this.message = message
    }
}