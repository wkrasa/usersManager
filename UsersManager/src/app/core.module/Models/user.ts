
import { Gender } from './gender';

	export class User
        {

  id? : number;
  email?: string;
 login: string ;
  password? : string;
  gender?: Gender;
    lastLogin?: Date;

  isActive?: boolean;


		//public void AddUserToGroup(RoleGroup group)
		//{
		//	this.Groups.Add(group);
		//}

		//public void RemoveUserFromGroup(RoleGroup group)
		//{
		//	this.Groups.Remove(group);
		//}

		//public void Update(string email, string login, bool isActive, IList<RoleGroup> groups)
		//{
		//	this.Email = email;
		//	this.Login = login;
		//	this.IsActive = isActive;
		//	this.Groups = groups;
		//}

		//public void Update(User other)
		//{
		//	this.Update(other.Email, other.Login, other.IsActive, other.Groups);	
		//}
}
