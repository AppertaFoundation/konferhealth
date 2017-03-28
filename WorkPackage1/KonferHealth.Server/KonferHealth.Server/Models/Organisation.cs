namespace KonferHealth.Server.Models
{
    using System;
    using System.Collections.Generic;

    public class Organisation
    {
        public Organisation()
        {
            this.Contacts = new HashSet<Contact>();
            this.Contracts = new HashSet<Contract>();
            this.PathwayStageOrganisations = new HashSet<PathwayStageOrganisation>();
            this.Products = new HashSet<Product>();
            this.Tags = new HashSet<Tag>();
        }

        public System.Guid ID { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }
        public string Building { get; set; }
        public string Street { get; set; }
        public string Town { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string Postcode { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string Description { get; set; }
        public string Logo { get; set; }
        public int Rating { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string Instagram { get; set; }
        public string Overview { get; set; }
        public string ClientBase { get; set; }
        public string Partners { get; set; }
        public Nullable<System.DateTime> FoundingDate { get; set; }
        public Nullable<decimal> Revenue { get; set; }
        public Nullable<int> Employees { get; set; }
        public string AnnualReportUrl { get; set; }
        public string VideoUrl { get; set; }
        public System.DateTime DateAdded { get; set; }
        public string Slides { get; set; }
        public string Framework { get; set; }
        public string CommercialModel { get; set; }
        public string Objectives { get; set; }
        public string FundingRequirements { get; set; }
        public string CollaborationDescription { get; set; }
        public string AreaOfDigitalExpertise { get; set; }
        public string AreaOfMedicalInterest { get; set; }
        public string ResearchEvidence { get; set; }
        public string AHSNSupport { get; set; }
        public string TrustSupport { get; set; }
        public string CCGSupport { get; set; }
        public string ProblemSolving { get; set; }
        public string Benefits { get; set; }
        public string EconomicEvaluation { get; set; }
        public string CollaborationTitle { get; set; }
        public string CollaborationPicture { get; set; }
        public Nullable<System.Guid> ParentID { get; set; }

        public virtual ICollection<Contact> Contacts { get; set; }
        public virtual ICollection<Contract> Contracts { get; set; }
        public virtual Document Document { get; set; }
        public virtual ICollection<PathwayStageOrganisation> PathwayStageOrganisations { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}