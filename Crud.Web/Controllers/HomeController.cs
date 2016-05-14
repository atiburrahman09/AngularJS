using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Crud.Domain;
using Crud.Data;


namespace Crud.Web.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }
        public ActionResult Customer()
        {
            ViewBag.Message = "Your Customer page.";
            return View();
        }
        // GET: All Customer
        [HttpGet]
        public JsonResult GetAllData(int index = 0, int size = 10)
        {
            CustomerRepositoryBLL customerRepositoryBll = new CustomerRepositoryBLL();

            return Json(customerRepositoryBll.GetAllData(index, size), JsonRequestBehavior.AllowGet);

            //var customers = db.Customers.OrderBy(c => c.Id).Skip(index * size).Take(size);


            //return Json(customers, JsonRequestBehavior.AllowGet);
        }
       [HttpPost]
        public JsonResult Insert(string Name, string Email)
        {
            bool status = false;
            try
            {
                CustomerRepositoryBLL bll = new CustomerRepositoryBLL();
                status = bll.Insert(Name, Email);
                

            }
            catch (Exception)
            {

                return Json(new
                {
                    success = false,
                    errors = ModelState.Keys.SelectMany(i => ModelState[i].Errors).Select(m => m.ErrorMessage).ToArray()
                });
            }

            return Json(new { success = status });
          
        }
        
    }
}