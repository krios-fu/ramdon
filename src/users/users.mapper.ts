
import { Injectable } from "@nestjs/common"
import { UserDto } from "./user.dto";
import { UsersEntity } from "./users.entity";

@Injectable()
export class UsersMapper {

	dtoToEntity( userDto : UserDto ) : UsersEntity
	{
		return new UsersEntity( userDto._username ); 
	}

	entityToDto( usersEntity : UsersEntity ) : UserDto {
		return new UserDto( usersEntity.uid , usersEntity.username );
	}
}
