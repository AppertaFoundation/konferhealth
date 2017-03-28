using System;
using System.ComponentModel.DataAnnotations;

namespace KonferHealth.Server.Models
{
    public class PathwayStageOrganisation
    {
        [Key]
        public System.Guid ID { get; set; }
        public System.Guid PathwayStageID { get; set; }
        public System.Guid OrganisationID { get; set; }
        public Nullable<System.Guid> ProductID { get; set; }

        public virtual Organisation Organisation { get; set; }
        public virtual PathwayStage PathwayStage { get; set; }
        public virtual Product Product { get; set; }
    }
}