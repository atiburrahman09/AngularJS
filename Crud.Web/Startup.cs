using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Crud.Web.Startup))]
namespace Crud.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
