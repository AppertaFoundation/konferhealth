//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace KonferHealth.Server.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Pathway
    {
        [Key]
        public System.Guid ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    
        public virtual PathwayStage PathwayStage { get; set; }
    }
}
