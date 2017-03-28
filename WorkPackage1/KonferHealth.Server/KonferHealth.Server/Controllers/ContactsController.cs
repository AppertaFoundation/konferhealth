using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
    using Models;

    public class ContactsController : ApiController
    {
        private DataContext db = new DataContext();

		// GET: api/Contacts
		public IEnumerable<Contact> Get()
        {
            return db.Contacts.ToList();
        }

        // GET: api/Contacts/5
        public Contact Get(Guid id)
        {
            return db.Contacts.FirstOrDefault(p => p.ID == id);
        }

        // POST: api/Contacts
        public void Post([FromBody]Contact value)
        {
			db.Contacts.Add(value);
			db.SaveChanges();
        }

        // PUT: api/Contacts/5
        public void Put(Guid id, [FromBody]Contact value)
        {
			db.Entry(value).State = System.Data.Entity.EntityState.Modified;
			db.SaveChanges();
		}

		/// <summary>
		/// Clean up
		/// </summary>
		/// <param name="disposing"></param>
		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{

				db.Dispose();
			}

			base.Dispose(disposing);
		}

	}
}
