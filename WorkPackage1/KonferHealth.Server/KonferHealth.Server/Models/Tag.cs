namespace KonferHealth.Server.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Tag
    {
        [Key]
        public System.Guid ID { get; set; }
        public string TagValue { get; set; }
        public Nullable<System.Guid> OrganisationID { get; set; }
        public Nullable<System.Guid> ProductID { get; set; }
        public Nullable<System.Guid> ArticleID { get; set; }
        public Nullable<System.Guid> CollaborationRequestID { get; set; }
        public Nullable<System.Guid> IndividualID { get; set; }
        public Nullable<System.Guid> GroupOrganisationID { get; set; }
        public Nullable<System.Guid> EventID { get; set; }
        public Nullable<System.Guid> PathwayID { get; set; }

        public virtual Article Article { get; set; }
        public virtual CollaborationRequest CollaborationRequest { get; set; }
        public virtual Contact Contact { get; set; }
        public virtual Organisation Organisation { get; set; }
        public virtual Product Product { get; set; }
        public virtual Event Event { get; set; }
    }
}