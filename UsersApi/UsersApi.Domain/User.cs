using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UsersApi.UsersApi.Domain
{
	public class User
	{
		public int ID { get; set; }	
		public string Email { get; set; }
		public string Login { get; set; }
		public string Password { get; set; }
		public Gender Gender { get; set; }

		public DateTime? LastLogin { get; set; }

		public bool IsActive { get; set; }

		public IList<RoleGroup> Groups { get; set; }
		public User()
		{
			this.IsActive = true;
			this.Groups = new List<RoleGroup>();
			this.LastLogin = DateTime.Now;
		}

		public void AddUserToGroup(RoleGroup group)
		{
			this.Groups.Add(group);
		}

		public void RemoveUserFromGroup(RoleGroup group)
		{
			this.Groups.Remove(group);
		}

		public void Update(string email, string login, bool isActive, IList<RoleGroup> groups)
		{
			this.Email = email;
			this.Login = login;
			this.IsActive = isActive;
			this.Groups = groups;
		}

		public void Update(User other)
		{
			this.Update(other.Email, other.Login, other.IsActive, other.Groups);	
		}

	}
}
