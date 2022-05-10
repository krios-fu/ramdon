import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';


@Injectable()
export class UsersRepository {

	constructor(
		@InjectRepository(UsersEntity)
		private userRepository : Repository<UsersEntity>,
		private mapper : UsersMapper ){}


		getAllUser( ) : Promise<UsersEntity[]>{
			return this.userRepository.find()
		}

		getIdUser ( id : string ) : Promise<UsersEntity>
		{
			return this.userRepository.findOne(id);
		}

		newUser ( userDto : UserDto ) : Promise<UsersEntity> {

			const tmp = this.mapper.dtoToEntity(userDto);
			return this.userRepository.save(tmp);
		}

		deleteUser ( id : string  ) :  Promise<DeleteResult>
		{
			return this.userRepository.delete( id );
		}
}
