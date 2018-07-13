using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Debug;
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

			var services = new ServiceCollection()
				.AddLogging(config => config.AddConsole())
				.BuildServiceProvider();

			var logger = services.GetRequiredService<ILogger<Program>>();

			//var builder = new ConfigurationBinder()
			//	.addJsonFile("appsettings.json", optional: true, reloadOnChange: true);

			
			logger.LogCritical("Hello");

			using (var scope = webhost.Services.CreateScope())
			{
				//var services = scope.ServiceProvider;
				try
				{
				  var context = scope.ServiceProvider.GetRequiredService<FifaDbContext>();
				  DbInitializer.Initialize(context);
				}
				catch (Exception exc)
				{
				  logger.LogError(exc, "An error occured while seeding the DB...");
				}
			}

			((IDisposable)services)?.Dispose();

			webhost.Run();
        }


        public static IWebHost BuildWebHost(string[] args) =>

			/*
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
				.Configure(hostingcontext, config) =>

 //	  		    .ConfigureLogging()
				 //.ConfigureLogging((hostingContext, logging) =>
				 //{
					// logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
					// logging.AddConsole();
					// logging.AddDebug();
					// logging.AddEventSourceLogger();
				 //})
				.Build();
			*/
			WebHost.CreateDefaultBuilder(args)
					.UseKestrel()
					.UseContentRoot(Directory.GetCurrentDirectory())
					.ConfigureAppConfiguration((hostingContext, config) =>
					  {
						var env = hostingContext.HostingEnvironment;
						config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
							  .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true);
						config.AddEnvironmentVariables();
					  })
					.ConfigureLogging((hostingContext, logging) =>
					  {
						logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
						logging.AddConsole();
						logging.AddDebug();
					  })
					.UseStartup<Startup>()
					.Build();

	}
}
