using System;
using System.ComponentModel.DataAnnotations;

namespace KonferHealth.Server.Models
{
    public class Contract
    {
        [Key]
        public System.Guid ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string ContractWith { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<decimal> Value { get; set; }
        public System.Guid OrganisationID { get; set; }

        public virtual Organisation Organisation { get; set; }
    }
}