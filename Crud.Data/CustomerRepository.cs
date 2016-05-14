using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;




namespace Crud.Data
{
    public class CustomerRepository
    {
        Entities Entities = new Entities();
        public void Add(string name, string ownerId)
        {

        }

        public List<Customer> Search(int index, int size)
        {
            var customers = Entities.Customers.OrderBy(c => c.Id).Skip(index * size).Take(size).ToList();
            return customers;
        }

        public void Edit()
        {

        }

        public void Delete()
        {

        }

        public bool Insert(string Name, string Email)
        {
            bool status = false;
            try
            {
                Entities.Customers.Add(new Customer()
                {
                    Name = Name,
                    Email=Email
                });

                Entities.SaveChanges();
                return status;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}

