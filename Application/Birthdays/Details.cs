using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;


namespace Application.Birthdays
{
    public class Details
    {
        public class Query : IRequest<Result<Birthday>>
        {
            public Guid Id { get; set; }
        }



        public class Handler : IRequestHandler<Query, Result<Birthday>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;

            }
            public async Task<Result<Birthday>> Handle(Query request, CancellationToken cancellationToken)
            {
                var birthday = await _context.Birthdays.FindAsync(request.Id);

                return Result<Birthday >.Success(birthday);

            }
        }
    }
}