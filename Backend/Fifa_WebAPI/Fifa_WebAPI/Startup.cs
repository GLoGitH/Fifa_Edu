using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Fifa_WebAPI.DbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;

namespace Fifa_WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			//services.AddCors();  //Enable Cross-OriginRequests (i.e. requests from another origin then the own one - eg. from another port on localhost... -- like when you have a front-end & backend app running and enable them to communicate) 

			

			services.AddDbContext<FifaDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services.AddMvc();

			//services.Configure<MvcOptions>(options =>
			//  {
			//	  options.Filters.Add(new CorsAuthorizationFilterFactory("AllowSpecificOrigin"));
			//  });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

				//sows UseCors with named policy
				app.UseCors(builder => builder.WithOrigins("http://localhost:3000")
											  .WithOrigins("http://localhost:3001")
											  .WithOrigins("http://localhost:3002")
											  .WithOrigins("http://localhost:3003")
											  .WithOrigins("http://localhost:3004")
											  .AllowAnyHeader()
											  .AllowAnyMethod()
											//.AllowAnyOrigin()
						   );
			}


			/*
			*/

			app.UseMvc();
        }
    }
}
