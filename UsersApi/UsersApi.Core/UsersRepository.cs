using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersApi.UsersApi.Domain;

namespace UsersApi.UsersApi.Core
{
	public static class UsersRepository
	{
		public static User Add(User user)
		{
			user.ID = DataStore.Users.Max(x => x.ID) + 1;
			DataStore.Users.Add(user);
			return user;
		}

		public static User GetByID(int id)
		{
			return DataStore.Users.Where(x => x.ID == id)
				.SingleOrDefault();
		}

		public static void Delete(int id)
		{
			DataStore.Users.Where(x => x.ID == id).Single().IsActive = false;
		}
	}
}
