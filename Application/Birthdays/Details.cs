using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Birthdays
{
    public class Details
    {
        public class Query : IRequest<Birthday>
        {
            public Guid Id { get; set; }
        }



        public class Handler : IRequestHandler<Query, Birthday>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;

            }
            public async Task<Birthday> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Birthdays.FindAsync(request.Id);
            }
        }
    }
}