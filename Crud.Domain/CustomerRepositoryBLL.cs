using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crud.Data;


namespace Crud.Domain
{
    public class CustomerRepositoryBLL
    {
        CustomerRepository Repository=new CustomerRepository();
        public object GetAllData(int index, int size)
        {
            try
            {
                 return Repository.Search(index,size);
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        public bool Insert(string Name, string Email)
        {
            CustomerRepository repository=new CustomerRepository();
            bool status = false;
            try
            {
                status = repository.Insert(Name, Email);
            }
                
            catch (Exception)
            {
                
                throw;
            }
            return status;
        }
    }
}
