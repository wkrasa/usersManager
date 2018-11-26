using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersApi.UsersApi.Domain;

namespace UsersApi.UsersApi.Core
{
	public class DataStore
	{
		public static IList<User> Users = new List<User>() {
			new User(){
				ID = 1,
				Login = "trader",
				Email = "User1.@test.com",
				Password = "123456"
			},

			new User(){
				ID = 2,
				Login = "admin",
				Email = "User2.@test.com",
				Password = "123456"
			},
			new User(){
				ID = 3,
				Login = "guest",
				Email = "User3.@test.com",
				Password = "123456"
			}

		};

		public static IList<Role> Roles = new List<Role>() {

			new Role(){ ID = 1, Name = "Admin" },
			new Role(){ ID = 2, Name = "Buyer" },
			new Role(){ ID = 3, Name = "Seller" },
			new Role(){ ID = 4, Name = "Viewer" }
		};

		public static IList<RoleGroup> Groups = new List<RoleGroup>() {
			new RoleGroup(){ ID = 1, Name = "Admin" },
			new RoleGroup(){ ID = 2, Name = "Trader" },
			new RoleGroup(){ ID = 3, Name = "Guest" }
		};


		
		public static void CreateData()
		{
			Groups[0].AddRole(Roles[0]);

			Groups[1].AddRole(Roles[1]);
			Groups[1].AddRole(Roles[2]);

			Groups[2].AddRole(Roles[3]);

			Users[0].AddUserToGroup(Groups[1]);
			Users[1].AddUserToGroup(Groups[0]);
			Users[2].AddUserToGroup(Groups[2]);
		}

		
	}
}
