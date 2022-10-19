using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

using Application.Birthdays;

namespace API.Controllers
{
    public class BirthdaysController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult> GetBirthdays()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Birthday>> GetBirthday(Guid id)
        {            
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBirthday(Birthday birthday)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Birthday = birthday }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBirthday(Guid id, Birthday birthday)
        {

            birthday.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Birthday = birthday }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBirthday(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}