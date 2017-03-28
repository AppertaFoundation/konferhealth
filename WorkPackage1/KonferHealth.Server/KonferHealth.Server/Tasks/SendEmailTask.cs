using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Diagnostics;
using System.Collections.Specialized;
using System.IO;
using System.Web;

namespace KonferHealth.Server.Tasks
{
	public class SendEmailTask
	{
		/// <summary>
		/// Send an email using Elastic Email
		/// </summary>
		public void Complete(string SendTo, string Subject, string Body, string Title)
		{
			NameValueCollection EmailContent = new NameValueCollection();

			using (WebClient client = new WebClient())
			{
				try
				{
					//Load the template from file
					string tFile = HttpContext.Current.Server.MapPath("/Content/EmailTemplate.html");
					StreamReader TemplateReader = File.OpenText(tFile);
					string template = TemplateReader.ReadToEnd();
					TemplateReader.Close();
					string emailBody = template;

					//Set the body and title
					emailBody = emailBody.Replace("[HEADER]", Title);
					emailBody = emailBody.Replace("[BODY]", Body);

					EmailContent.Add("apikey", "45ecaf1b-f6e1-4d30-a9e6-32fe1fa614f7");
					EmailContent.Add("from", "team@ykonferhealth.com");
					EmailContent.Add("fromName", "KonferHealth");
					EmailContent.Add("to", SendTo);
					EmailContent.Add("subject", Subject);
					EmailContent.Add("bodyHtml", Body);
					EmailContent.Add("isTransactional", "true");
					byte[] apiResponse = client.UploadValues("https://api.elasticemail.com/v2/email/send", EmailContent);
				}
				catch (Exception ex)
				{
					Trace.TraceError("Elastic Email Exception caught: " + ex.Message + "\n" + ex.StackTrace);
				}
			}
		}
	}
}
