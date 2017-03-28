namespace KonferHealth.Server.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class CollaborationRequest
    {
        public CollaborationRequest()
        {
            this.Messages = new HashSet<Message>();
            this.Tags = new HashSet<Tag>();
        }

        [Key]
        public System.Guid ID { get; set; }
        public int CollaborationType { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Problem { get; set; }
        public string Aim { get; set; }
        public string Benefit { get; set; }
        public Nullable<int> PopulationSize { get; set; }
        public string DemographicMix { get; set; }
        public string OrganisationalMix { get; set; }
        public string ParticipationRequired { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<System.DateTime> EventDate { get; set; }
        public string Funding { get; set; }
        public Nullable<decimal> Value { get; set; }
        public string Organisation { get; set; }
        public string Product { get; set; }
        public string IndvidualContact { get; set; }
        public System.Guid OwnerID { get; set; }

        public virtual Contact Contact { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}