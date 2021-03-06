﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using UsersApi.UsersApi.Core;

namespace UsersApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
			DataStore.CreateData();
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors();
			services.AddMvc()
				.AddJsonOptions(options =>
				{
					options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
					options.SerializerSettings.DateFormatString = "yyyy-MM-dd";
				})
				.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

			//services.AddAuthentication(o => {
			//	o.DefaultScheme = SchemesNamesConst.TokenAuthenticationDefaultScheme;
			//})
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseHsts();
			}

			app.UseCors(builder => builder
			.AllowAnyOrigin()
			.AllowAnyMethod()
			.AllowAnyHeader()
			.AllowCredentials());


			app.UseHttpsRedirection();
			app.UseMiddleware<ErrorHandlingMiddleware>();
			app.UseMiddleware<AuthMiddleware>();
			app.UseMvc();
		}
	}
}
