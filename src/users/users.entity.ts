import { Column, Entity, PrimaryColumn } from 'typeorm' 

@Entity('users')
export class UsersEntity {

	@PrimaryColumn()
	 uid : number;

	@Column({
		unique : true
	})
	 username : string;

	constructor( username : string ){

		this.username = username;
	}
	
}
