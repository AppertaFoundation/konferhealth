using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace KonferHealth.Server.Models
{
    public class Contact
    {
        public Contact()
        {
            this.CollaborationRequests = new HashSet<CollaborationRequest>();
            this.Comments = new HashSet<Comment>();
            this.Messages = new HashSet<Message>();
            this.RecipientMessages = new HashSet<Message>();
            this.Tags = new HashSet<Tag>();
        }

        [Key]
        public System.Guid ID { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Title { get; set; }
        public string JobTitle { get; set; }
        public string Responsibilities { get; set; }
        public string ProfileImage { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public System.Guid Manager { get; set; }
        public Nullable<System.Guid> OrganisationID { get; set; }
        public Nullable<System.DateTime> DateJoined { get; set; }
        public Nullable<System.Guid> GroupCompanyID { get; set; }
        public string Twitter { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Slides { get; set; }
        public string VideoURL { get; set; }
        public string CollaborationTitle { get; set; }
        public string CollaborationPicture { get; set; }
        public string Objectives { get; set; }
        public string CollaborationDescription { get; set; }
        public string AreaOfDigitalExpertise { get; set; }
        public string AreaOfMedicalInterest { get; set; }
        public string Testimonials { get; set; }
        public string Problem { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public bool IsOrgAdmin { get; set; }
        public bool IsPlatformAdmin { get; set; }

        public virtual ICollection<CollaborationRequest> CollaborationRequests { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual Organisation Organisation { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
        public virtual ICollection<Message> RecipientMessages { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}