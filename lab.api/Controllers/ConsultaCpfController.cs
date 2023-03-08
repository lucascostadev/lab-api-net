using lab.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsultaCpfController : ControllerBase
    {
        [HttpGet(Name = "VerificarCpf")]
        public bool Get(string cpf)
        {
            if (cpf.Contains("5"))
            {
                return true;
            }
            else if (!cpf.Contains("5"))
            {
                return false;
            }

            throw new NotImplementedException();
        }

        [HttpPost(Name = "SalvarCpf")]
        public bool Post(Cpf obj)
        {
            return true;
        }
    }
}
