using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Options;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using UsersApi.UsersApi.Core;

namespace UsersApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		public AuthController()
		{
			
		}

		[AllowAnonymous]
		[HttpPost]
		public IActionResult Post([FromBody]LoginModel loginModel)
		{
			var user = DataStore.Users
				.Where(x => x.Login == loginModel.Login && x.Password == loginModel.Pass)
				.SingleOrDefault();

			if (user == null)
				return BadRequest(new { message = "Username or password is incorrect" });

			var token = user.Login;

			// return basic user info (without password) and token to store client side
			return Ok(new
			{
				Id = user.ID,
				Username = user.Login,
				Token = token
			});
		}

	}
}
