import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: string[] =[];

    getUsers(index : string){
        return this.users[index];
    }
    createUser(username: string){
        this.users.push(username);
        return this.users;
    }
}
