using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using Application.Core;
using FluentValidation;

namespace Application.Birthdays
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Birthday Birthday {get; set;}
        }



        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;

            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var birthday = await  _context.Birthdays.FindAsync(request.Birthday.Id);

                if(birthday == null) return null;
                _mapper.Map(request.Birthday, birthday);

                var result = await _context.SaveChangesAsync() > 0;
                

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}