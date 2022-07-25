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
    public class BirthdaysController :BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Birthday>>> GetBirthdays()
        {
            return await Mediator.Send(new List.Query() );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Birthday>> GetBirthday(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id });
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateBirthday(Birthday birthday)
        {
            return Ok(await Mediator.Send(new Create.Command{Birthday = birthday}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBirthday(Guid id, Birthday birthday)
        {
            birthday.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Birthday = birthday}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBirthday(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}