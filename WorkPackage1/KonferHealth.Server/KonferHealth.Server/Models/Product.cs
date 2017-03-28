namespace KonferHealth.Server.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Product
    {
        public Product()
        {
            this.PathwayStageOrganisations = new HashSet<PathwayStageOrganisation>();
            this.Tags = new HashSet<Tag>();
        }

        [Key]
        public System.Guid ID { get; set; }
        public System.Guid OrganisationID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Type { get; set; }
        public string Picture { get; set; }
        public string Website { get; set; }
        public string Twitter { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Slides { get; set; }
        public string Video { get; set; }
        public string CommercialModel { get; set; }
        public string Framework { get; set; }
        public Nullable<System.Guid> CaseStudyID { get; set; }
        public Nullable<System.Guid> ContractID { get; set; }
        public string Objectives { get; set; }
        public string AreaOfDigitalExpertise { get; set; }
        public string AreaOfMedicalExpertise { get; set; }
        public string ResearchEvidence { get; set; }
        public string AHSNSupport { get; set; }
        public string TrustSupport { get; set; }
        public string CCGSupport { get; set; }
        public string Testimonials { get; set; }
        public string ProblemSolving { get; set; }
        public string Benefits { get; set; }
        public string CollaborationTitle { get; set; }
        public string CollaborationPic { get; set; }
        public string CollaborationDescription { get; set; }

        public virtual Organisation Organisation { get; set; }
        public virtual ICollection<PathwayStageOrganisation> PathwayStageOrganisations { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}