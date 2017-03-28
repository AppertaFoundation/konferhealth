using System;
using System.ComponentModel.DataAnnotations;

namespace KonferHealth.Server.Models
{
    public class Message
    {
        [Key]
        public System.Guid ID { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }
        public System.Guid From { get; set; }
        public System.Guid To { get; set; }
        public System.DateTime Sent { get; set; }
        public bool Read { get; set; }
        public Nullable<System.Guid> CollaborationRequestID { get; set; }

        public virtual CollaborationRequest CollaborationRequest { get; set; }
        public virtual Contact Contact { get; set; }
        public virtual Contact RecipientContact { get; set; }
    }
}