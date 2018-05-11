using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Fifa_WebAPI.DbContext;
using Fifa_WebAPI.Models;


namespace Fifa_WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var webhost = BuildWebHost(args);

			using (var scope = webhost.Services.CreateScope())
			{
				var services = scope.ServiceProvider;
				try
				{
				  var context = services.GetRequiredService<FifaDbContext>();
				  DbInitializer.Initialize(context);
				}
				catch (Exception exc)
				{
					var logger = services.GetRequiredService<ILogger<Program>>();
					
					logger.LogError(exc, "An error occured while seeding the DB...");
				}
			}

			webhost.Run();
        }


        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
//			.ConfigureLogging()
                .Build();

    }
}
