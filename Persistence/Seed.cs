using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Birthdays.Any()) return;
            
            var activities = new List<Birthday>
            {
                new Birthday
                {
                    FirstName = "Anna",
                    LastName = "Vleeshouwer",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Emma",
                    LastName = "Prima",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Eduard",
                    LastName = "Fiasco",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Paul",
                    LastName = "Bakker",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Peter",
                    LastName = "Klank",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Aart",
                    LastName = "de Baes",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Emma",
                    LastName = "Vlees",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Jan",
                    LastName = "Fabriek",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Vera",
                    LastName = "Kloos",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
                new Birthday
                {
                    FirstName = "Bril",
                    LastName = "Jant",
                    DateOfBirth = DateTime.Now.AddMonths(-2),
                    Ideas = "Activity 2 months ago",
                    Streetname = "drinks",
                    Housenumber = 12,
                    HousenumberAddition = "a",
                    Age = 18,
                    Postcode = "1234AB"
                },
            };

            await context.Birthdays.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}