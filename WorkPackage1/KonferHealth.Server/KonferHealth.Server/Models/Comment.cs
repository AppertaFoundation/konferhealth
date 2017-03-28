using System.ComponentModel.DataAnnotations;

namespace KonferHealth.Server.Models
{
    public class Comment
    {
        [Key]
        public System.Guid ID { get; set; }
        public string Body { get; set; }
        public System.Guid Author { get; set; }
        public System.Guid Article { get; set; }
        public System.DateTime DateAdded { get; set; }

        public virtual Article ArticleEntity { get; set; }
        public virtual Contact Contact { get; set; }
    }
}