using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;

namespace UsersApi.UsersApi.Core
{
	public class AuthMiddleware
	{
		private string AUTH_HEADER = "Authorization";

		private readonly RequestDelegate next;

		public AuthMiddleware(RequestDelegate next)
		{
			this.next = next;
		}

		public async Task Invoke(HttpContext context /* other dependencies */)
		{
			this.Auth(context);
			await next(context);
			
		}

		private void Auth(HttpContext context)
		{
			var authHeaderVal = context.Request.Headers[AUTH_HEADER];
			if (StringValues.IsNullOrEmpty(authHeaderVal)) { return; }

			var user = DataStore.Users.Where(x => x.Login == authHeaderVal[0]).SingleOrDefault();

			if (user == null) { return; }

			var identity = new GenericIdentity(user.Login);

			Thread.CurrentPrincipal = new GenericPrincipal(identity, null);
			context.User = new ClaimsPrincipal(identity);
		}
	}
}
