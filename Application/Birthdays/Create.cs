using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using Application.Core;

namespace Application.Birthdays
{
    public class Create
    {
        public class Command: IRequest<Result<Unit>>
        {
            public Birthday Birthday {get; set;} 
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Birthdays.Add(request.Birthday);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Fauked to create activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}