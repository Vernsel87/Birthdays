using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Birthdays
{
    public class List
    {
        public class Query : IRequest<Result<List<Birthday>>>{}

        public class Handler : IRequestHandler<Query, Result<List<Birthday>>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Result<List<Birthday>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Birthday>>.Success(await _context.Birthdays.ToListAsync(cancellationToken));
            }
        }
    }
}