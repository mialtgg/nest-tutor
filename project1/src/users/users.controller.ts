import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll (){
        return  this.usersService.getUsers()
    }

    @Get(':index')
    findOne(@Param('index') index:string){
        return this.usersService.getUsers(index);

    }

    @Post()
    create(@Body() username: string){
        return this.usersService.createUser(username)
    }
    
}
