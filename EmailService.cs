using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace InstaWebsite
{
    /// <summary>
    /// Email service for sending account deletion requests
    /// </summary>
    public class EmailService
    {
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;
        private readonly string _recipientEmail;

        public EmailService()
        {
            // Configure these values in your app settings or environment variables
            _smtpHost = "smtp.gmail.com"; // For Gmail
            _smtpPort = 587;
            _smtpUsername = "your-email@gmail.com"; // Replace with your Gmail
            _smtpPassword = "your-app-password"; // Use Gmail App Password, not regular password
            _recipientEmail = "26rakkesh@gmail.com";
        }

        /// <summary>
        /// Sends account deletion request email
        /// </summary>
        /// <param name="userName">User's name</param>
        /// <param name="mobileNumber">User's mobile number</param>
        /// <returns>True if email sent successfully, false otherwise</returns>
        public async Task<bool> SendAccountDeletionRequestAsync(string userName, string mobileNumber)
        {
            try
            {
                using (var smtpClient = new SmtpClient(_smtpHost, _smtpPort))
                {
                    smtpClient.EnableSsl = true;
                    smtpClient.UseDefaultCredentials = false;
                    smtpClient.Credentials = new NetworkCredential(_smtpUsername, _smtpPassword);

                    var mailMessage = new MailMessage
                    {
                        From = new MailAddress(_smtpUsername, "inSTA Support"),
                        Subject = "Account Deletion Request - inSTA",
                        Body = BuildEmailBody(userName, mobileNumber),
                        IsBodyHtml = false
                    };

                    mailMessage.To.Add(_recipientEmail);

                    await smtpClient.SendMailAsync(mailMessage);
                    return true;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
                return false;
            }
        }

        /// <summary>
        /// Builds the email body content
        /// </summary>
        private string BuildEmailBody(string userName, string mobileNumber)
        {
            return $@"Account Deletion Request

Name: {userName}
Mobile Number: {mobileNumber}

Please process this account deletion request.

Submitted on: {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
        }
    }

    /// <summary>
    /// Model for account deletion request
    /// </summary>
    public class AccountDeletionRequest
    {
        public string UserName { get; set; }
        public string MobileNumber { get; set; }
    }
}
