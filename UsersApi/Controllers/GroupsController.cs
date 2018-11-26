using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UsersApi.UsersApi.Core;
using UsersApi.UsersApi.Domain;

namespace UsersApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class GroupsController : ControllerBase
	{
		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<RoleGroup>> Get()
		{
			return DataStore.Groups.ToArray();
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public ActionResult<RoleGroup> Get(int id)
		{
			return GroupsRepository.GetByID(id);
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody]RoleGroup role)
		{
			GroupsRepository.Add(role);			
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put([FromBody] RoleGroup role)
		{
			GroupsRepository.GetByID(role.ID).Update(role);
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			GroupsRepository.Delete(id);
		}
	}
}
