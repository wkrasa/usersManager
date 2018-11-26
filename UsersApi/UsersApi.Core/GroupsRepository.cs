using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersApi.UsersApi.Domain;

namespace UsersApi.UsersApi.Core
{
	public static class GroupsRepository
	{ 
		public static IEnumerable<RoleGroup> GetGroups(int userId)
		{
			return DataStore.Groups
				.ToList();
		}

		public static IEnumerable<RoleGroup> GetGroupsForUser(int userId)
		{
			return DataStore.Users
				.Where(x => x.ID == userId)
				.Single()
				.Groups;
		}
		public static RoleGroup Add(RoleGroup group)
		{
			group.ID = DataStore.Groups.Max(x => x.ID) + 1;
			DataStore.Groups.Add(group);
			return group;
		}

		public static RoleGroup GetByID(int id)
		{
			return DataStore.Groups.Where(x => x.ID == id)
				.SingleOrDefault();
		}

		public static void Delete(int id)
		{
			var group = GroupsRepository.GetByID(id);
			DataStore.Groups.Remove(group);
		}
	}
}
