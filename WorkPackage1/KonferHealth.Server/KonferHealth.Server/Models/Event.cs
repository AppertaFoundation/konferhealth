using System;
using System.Collections.Generic;

namespace KonferHealth.Server.Models
{
    public class Event
    {
        public Event()
        {
            this.Tags = new HashSet<Tag>();
        }

        public System.Guid ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public System.DateTime StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string Location { get; set; }
        public string EventUrl { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }
    }
}