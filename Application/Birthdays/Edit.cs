using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Birthdays
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Birthday Birthday {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var birthday = await  _context.Birthdays.FindAsync(request.Birthday.Id);
                _mapper.Map(request.Birthday, birthday);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}