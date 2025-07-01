using Google.Cloud.Functions.Framework;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace EcoSystem.Functions
{
    public class HttpHelloFunction : IHttpFunction
    {
        public async Task HandleAsync(HttpContext context)
        {
            await context.Response.WriteAsync("Ciao dal backend EcoSystem (HTTP)!", context.RequestAborted);
        }
    }
}
