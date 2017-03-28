using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
    using Models;

    public class SearchController : ApiController
    {
        
        // GET: api/Search
        public IEnumerable<Tag> Find(string term)
        {
            List<Tag> results = new List<Models.Tag>();

            using (DataContext db = new Models.DataContext())
            {
                var terms = term.Split(' ');
                results = db.Tags.Include("Organisation")
                    .Include("Product")
                    .Include("Article")
                    .Include("Contact")
                    .Include("Event")
                    .Where(t => terms.Any(tag => t.TagValue.Contains(tag))).ToList();
            }

            return results;
        }

        
    }
}
