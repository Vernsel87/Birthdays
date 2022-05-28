using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BirthdaysController :BaseApiController
    {
        private readonly DataContext _context;
        public BirthdaysController(DataContext context)
        {
            _context = context;            
        }

        [HttpGet]
        public async Task<ActionResult<List<Birthday>>> GetBirthdays()
        {
            return await _context.Birthdays.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Birthday>> GetBirthday(Guid id)
        {
            return await _context.Birthdays.FindAsync(id);
        }
        
    }
}