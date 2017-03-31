using System.Web.Mvc;
using System.Web.Routing;

namespace Vue4Mac
{
	public class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");


			routes.MapRoute(
				name: "Default",
				url: "{*url}",//map all routes to HomeController@Index
				defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
			);
		}
	}
}
