import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor ( private user : UsersService ) {}

	@Get()
	async getAllUser() : Promise<UserDto[]> {
		return await this.user.getAllUser();
	}

	@Get(':id')
	async getIdUser( @Param('id') id : string) : Promise < UserDto > {
		return await this.user.getIdUser(id);
	}

	@Post()
	async newUser( @Body() user : UserDto ) : Promise<UserDto>{
		console.log("hola ", user);
		return await this.user.newUser(user);
		// return user;
	}

	@Delete(':id')
	async deleteUSer (@Param('id') id : string ) : Promise<void> {
		return await this.user.deleteUser(id);
	}
}
