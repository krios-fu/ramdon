import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UserDto } from './user.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

	constructor (
		private userRepo : UsersRepository, 
		private userMap : UsersMapper
	){}

	async getAllUser () :  Promise< UserDto []>
	{
		const user : UsersEntity[] = await this.userRepo.getAllUser();
		return user.map( user => this.userMap.entityToDto(user) );
	}

	async getIdUser( id : string ) : Promise < UserDto > {
		const user :  UsersEntity = await this.userRepo.getIdUser(id);
		return this.userMap.entityToDto(user);
	}

	async newUser ( newUser :  UserDto  ) : Promise<UserDto>{

		const user : UsersEntity = await this.userRepo.newUser(newUser);
		return this.userMap.entityToDto(user);
	}

	async deleteUser ( id : string ) : Promise <void> {
		await this.userRepo.deleteUser(id);
	}
}
