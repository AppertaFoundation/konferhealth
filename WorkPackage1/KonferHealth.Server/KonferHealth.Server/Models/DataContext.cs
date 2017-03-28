namespace KonferHealth.Server.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class DataContext : DbContext
    {
        // Your context has been configured to use a 'DataContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'KonferHealth.Server.Models.DataContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'DataContext' 
        // connection string in the application configuration file.
        public DataContext()
            : base("name=DataContext")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Organisation> Organisations { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
		public virtual DbSet<Pathway> Pathways { get; set; }
        public virtual DbSet<CollaborationRequest> CollaborationRequests { get; set; }
		public virtual DbSet<Message> Messages { get; set; }
    }

   
}