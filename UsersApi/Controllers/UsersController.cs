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
	public class UsersController : ControllerBase
	{
		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<User>> Get()
		{
			return DataStore.Users.ToArray();
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public ActionResult<User> Get(int id)
		{
			return UsersRepository.GetByID(id);
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody]User user)
		{
			UsersRepository.Add(user);			
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put([FromBody] User user)
		{
			UsersRepository.GetByID(user.ID).Update(user);
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			UsersRepository.Delete(id);
		}
	}
}
