using System;
using System.Collections.Generic;

namespace KonferHealth.Server.Models
{
    public class Article
    {
        public Article()
        {
            this.Comments = new HashSet<Comment>();
            this.Tags = new HashSet<Tag>();
        }

        public System.Guid ID { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Introduction { get; set; }
        public string Body { get; set; }
        public Nullable<System.Guid> Author { get; set; }
        public string ScrapedURL { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}