using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Birthdays
{
    public class List
    {
        public class Query : IRequest<List<Birthday>>{}

        public class Handler : IRequestHandler<Query, List<Birthday>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<List<Birthday>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Birthdays.ToListAsync();
            }
        }
    }
}