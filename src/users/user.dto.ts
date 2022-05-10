export class UserDto {

	_id : number;
	_username: string;

	constructor ( id : number, username :string ){
			this._id = id;
			this._username = username;
		}
}
