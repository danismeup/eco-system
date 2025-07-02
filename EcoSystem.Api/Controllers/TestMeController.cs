using Microsoft.AspNetCore.Mvc;

namespace EcoSystem.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestMeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Backend Pronto!");
        }
    }
}
