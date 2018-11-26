using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UsersApi.UsersApi.Domain
{
	public class RoleGroup
	{
		public int ID { get; set; }

		public string Name { get; set; }
		
		public IList<Role> Roles { get; set; }

		public IList<RoleGroup> Groups { get; set; }

		public RoleGroup()
		{
			this.Roles = new List<Role>();
			this.Groups = new List<RoleGroup>();
		}


		public void AddRole(Role role)
		{
			this.Roles.Add(role);
		}

		public void RemoveRole(Role role)
		{
			this.Roles.Remove(role);
		}
		public void AddGroup(RoleGroup group)
		{
			this.Groups.Add(group);
		}

		public void RemoveGroup(RoleGroup group)
		{
			this.Groups.Remove(group);
		}

		public void Update(RoleGroup group)
		{
			this.Name = group.Name;
		}

	}
}
