using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;

namespace Application.Birthdays
{
    public class Create
    {
        public class Command: IRequest
        {
            public Birthday Birthday {get; set;} 
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Birthdays.Add(request.Birthday);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}