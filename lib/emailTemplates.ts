export interface SanitizedContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: string;
  requirement: string;
  description?: string;
  country?: string;
  designation?: string;
  service?: string;
  agreeToMarketing?: boolean;
  company?: string;
  sourcePage?: string;
}

/**
 * Generates responsive, modern HTML email for the internal admin team.
 */
export function contactFormEmailAdmin(data: SanitizedContactData): string {
  const submissionTime = new Date().toUTCString();
  const messageContent = data.requirement || data.description || "No additional message provided.";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry - Sparsh IT</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #061826 0%, #0D9488 100%); padding: 32px 28px; text-align: left; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
    .header p { margin: 6px 0 0 0; color: #99f6e4; font-size: 14px; }
    .content { padding: 28px; }
    .table-container { width: 100%; border-collapse: collapse; margin-top: 12px; }
    .table-container th { text-align: left; padding: 12px 14px; background-color: #f8fafc; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #e2e8f0; width: 34%; }
    .table-container td { padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; line-height: 1.5; }
    .message-box { margin-top: 24px; padding: 18px; background-color: #f8fafc; border-left: 4px solid #0D9488; border-radius: 4px; }
    .message-box h3 { margin: 0 0 8px 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; }
    .message-content { white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b; }
    .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Request</h1>
      <p>Submitted via Sparsh IT Contact Form &bull; ${submissionTime}</p>
    </div>
    <div class="content">
      <table class="table-container">
        <tr>
          <th>Name</th>
          <td><strong>${data.firstName} ${data.lastName}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${data.email}" style="color: #0D9488; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href="tel:${data.phone}" style="color: #0D9488; text-decoration: none;">${data.phone}</a></td>
        </tr>
        <tr>
          <th>Referral Source</th>
          <td><strong>${data.referral}</strong></td>
        </tr>
        ${data.country ? `<tr><th>Country</th><td>${data.country}</td></tr>` : ""}
        ${data.designation ? `<tr><th>Designation</th><td>${data.designation}</td></tr>` : ""}
        ${data.service ? `<tr><th>Service</th><td>${data.service}</td></tr>` : ""}
        ${data.company ? `<tr><th>Company</th><td>${data.company}</td></tr>` : ""}
        ${data.sourcePage ? `<tr><th>Submitted from</th><td>${data.sourcePage}</td></tr>` : ""}
      </table>

      <div class="message-box">
        <h3>Requirement Details:</h3>
        <div class="message-content">${messageContent}</div>
      </div>
    </div>
    <div class="footer">
      This is an automated notification from Sparsh IT Contact System.
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generates an automated confirmation email to the user.
 */
export function contactFormEmailUser(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Sparsh IT</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #061826 0%, #0D9488 100%); padding: 32px 28px; text-align: left; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; }
    .content { padding: 32px 28px; font-size: 15px; line-height: 1.6; color: #374151; }
    .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
    .signature strong { color: #111827; }
    .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #9ca3af; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>We have received your message</h1>
    </div>
    <div class="content">
      <p>Hi ${firstName},</p>
      <p>Thank you for reaching out to <strong>Sparsh IT</strong>. We have received your inquiry and our engineering and strategy team is reviewing your requirements.</p>
      <p>A member of our team will get in touch with you within <strong>24 to 48 business hours</strong> to discuss how we can assist you.</p>
      <p>If you have any urgent questions or updates in the meantime, please reply directly to this email or reach us at <a href="mailto:support@sparshinfosystem.com" style="color: #0D9488;">support@sparshinfosystem.com</a>.</p>
      
      <div class="signature">
        <strong>The Sparsh IT Team</strong><br>
        Engineering What's Next<br>
        A-121, Sahni Tower, Block-A, Sector-5, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005<br>
        CIN: U82990UW2026PTC249281<br>
        Landline: +91-120-4458701 | Mobile: +91-9212517322
      </div>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Sparsh Info System Pvt Ltd. All rights reserved.
    </div>
  </div>
</body>
</html>
  `.trim();
}


export interface SanitizedJobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  jobId: string;
  jobTitle: string;
  jobCategory?: string;
  jobLocation?: string;
  fileName?: string;
}

/**
 * Generates responsive, modern HTML email for the internal careers / HR team.
 */
export function jobApplicationEmailAdmin(data: SanitizedJobApplicationData): string {
  const submissionTime = new Date().toUTCString();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Job Application - Sparsh IT Careers</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #061826 0%, #0D9488 100%); padding: 32px 28px; text-align: left; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
    .header p { margin: 6px 0 0 0; color: #99f6e4; font-size: 14px; }
    .content { padding: 28px; }
    .badge { display: inline-block; background-color: #ccfbf1; color: #0f766e; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
    .table-container { width: 100%; border-collapse: collapse; margin-top: 12px; }
    .table-container th { text-align: left; padding: 12px 14px; background-color: #f8fafc; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #e2e8f0; width: 34%; }
    .table-container td { padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; line-height: 1.5; }
    .message-box { margin-top: 24px; padding: 18px; background-color: #f8fafc; border-left: 4px solid #0D9488; border-radius: 4px; }
    .message-box h3 { margin: 0 0 8px 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; }
    .message-content { white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b; }
    .attachment-note { margin-top: 16px; padding: 12px 14px; background-color: #f0fdfa; border: 1px solid #99f6e4; border-radius: 6px; font-size: 13px; color: #0f766e; }
    .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Job Application Received</h1>
      <p>Submitted via Sparsh IT Careers &bull; ${submissionTime}</p>
    </div>
    <div class="content">
      <div class="badge">Position: ${data.jobTitle} (${data.jobId})</div>
      
      <table class="table-container">
        <tr>
          <th>Applicant Name</th>
          <td><strong>${data.fullName}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${data.email}" style="color: #0D9488; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href="tel:${data.phone}" style="color: #0D9488; text-decoration: none;">${data.phone}</a></td>
        </tr>
        <tr>
          <th>Job Title</th>
          <td><strong>${data.jobTitle}</strong></td>
        </tr>
        <tr>
          <th>Job Reference ID</th>
          <td><strong>#${data.jobId}</strong></td>
        </tr>
        ${data.jobCategory ? `<tr><th>Category</th><td>${data.jobCategory}</td></tr>` : ""}
        ${data.jobLocation ? `<tr><th>Location</th><td>${data.jobLocation}</td></tr>` : ""}
        ${data.fileName ? `<tr><th>Resume File</th><td><strong>${data.fileName}</strong> (attached to this email)</td></tr>` : ""}
      </table>

      <div class="message-box">
        <h3>Applicant Bio / Summary:</h3>
        <div class="message-content">${data.bio}</div>
      </div>

      ${data.fileName ? `
      <div class="attachment-note">
        📎 <strong>Resume Attached:</strong> ${data.fileName} has been attached to this email message.
      </div>
      ` : ""}
    </div>
    <div class="footer">
      This is an automated notification from the Sparsh IT Careers Recruitment Portal.
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generates an automated confirmation email to the job applicant.
 */
export function jobApplicationEmailUser(data: {
  fullName: string;
  jobTitle: string;
  jobId: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - Sparsh IT</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #061826 0%, #0D9488 100%); padding: 32px 28px; text-align: left; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; }
    .content { padding: 32px 28px; font-size: 15px; line-height: 1.6; color: #374151; }
    .card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin: 20px 0; }
    .card-title { font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px; }
    .card-val { font-size: 16px; font-weight: 700; color: #111827; }
    .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
    .signature strong { color: #111827; }
    .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #9ca3af; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>We have received your application</h1>
    </div>
    <div class="content">
      <p>Dear ${data.fullName},</p>
      <p>Thank you for your interest in joining <strong>Sparsh IT</strong>! We have successfully received your application for the following position:</p>
      
      <div class="card">
        <div class="card-title">Applied Role</div>
        <div class="card-val">${data.jobTitle} (Job ID: #${data.jobId})</div>
      </div>

      <p>Our talent acquisition team will carefully review your qualifications, background, and resume. If your profile matches our requirements, a member of our recruiting team will reach out to you with details regarding the next steps.</p>
      
      <p>If you have any questions in the meantime, please feel free to contact us at <a href="mailto:support@sparshinfosystem.com" style="color: #0D9488; text-decoration: none;">support@sparshinfosystem.com</a>.</p>
      
      <div class="signature">
        <strong>Sparsh IT Careers Team</strong><br>
        Engineering What's Next<br>
        A-121, Sahni Tower, Block-A, Sector-5, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005<br>
        CIN: U82990UW2026PTC249281<br>
        Landline: +91-120-4458701 | Mobile: +91-9212517322
      </div>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Sparsh Info System Pvt Ltd. All rights reserved.
    </div>
  </div>
</body>
</html>
  `.trim();
}
