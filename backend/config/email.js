const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Enquiry aane pe admin ko mail bhejo
const sendEnquiryNotification = async (enquiry) => {
  const mailOptions = {
    from: `"DIT Consultancy" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `📬 New Enquiry: ${enquiry.type} — ${enquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f6f8fb; padding: 24px; border-radius: 12px;">
        
        <!-- Header -->
        <div style="background: #13181f; padding: 24px 28px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #0f9be7; margin: 0; font-size: 22px;">New Enquiry Received</h2>
          <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 13px;">DIT Consultancy — Contact Form</p>
        </div>

        <!-- Details -->
        <div style="background: #fff; border-radius: 10px; padding: 24px; border: 1px solid #e0e5ef; margin-bottom: 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #8494a9; font-size: 13px; width: 140px;">👤 Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #13181f; font-weight: 600; font-size: 13px;">${enquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #8494a9; font-size: 13px;">✉️ Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; font-size: 13px;">
                <a href="mailto:${enquiry.email}" style="color: #0f9be7; text-decoration: none;">${enquiry.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #8494a9; font-size: 13px;">📞 Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #13181f; font-size: 13px;">${enquiry.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #8494a9; font-size: 13px;">🏢 Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f3f8; color: #13181f; font-size: 13px;">${enquiry.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8494a9; font-size: 13px;">📋 Type</td>
              <td style="padding: 10px 0;">
                <span style="background: #e8f5ff; color: #0a6fa0; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 600;">${enquiry.type}</span>
              </td>
            </tr>
          </table>
        </div>

        <!-- Message -->
        <div style="background: #fff; border-radius: 10px; padding: 20px 24px; border: 1px solid #e0e5ef; border-left: 4px solid #0f9be7; margin-bottom: 20px;">
          <p style="color: #8494a9; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="color: #13181f; font-size: 14px; line-height: 1.7; margin: 0;">${enquiry.message}</p>
        </div>

        <!-- Reply Button -->
        <div style="text-align: center; margin-bottom: 20px;">
          <a href="mailto:${enquiry.email}?subject=Re: Your Enquiry — DIT Consultancy" 
             style="background: #0f9be7; color: #fff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block;">
            Reply to ${enquiry.name} →
          </a>
        </div>

        <!-- Footer -->
        <div style="text-align: center; color: #b0bac9; font-size: 12px;">
          <p style="margin: 0;">DIT Consultancy · Job Portal</p>
          <p style="margin: 4px 0 0;">This is an automated notification.</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// ✅ User ko confirmation mail bhejo
const sendEnquiryConfirmation = async (enquiry) => {
  const mailOptions = {
    from: `"DIT Consultancy" <${process.env.EMAIL_USER}>`,
    to: enquiry.email,
    subject: `✅ We received your message — DIT Consultancy`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f6f8fb; padding: 24px; border-radius: 12px;">
        
        <!-- Header -->
        <div style="background: #13181f; padding: 24px 28px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #0f9be7; margin: 0; font-size: 22px;">Message Received!</h2>
          <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 13px;">DIT Consultancy — We'll be in touch soon</p>
        </div>

        <!-- Body -->
        <div style="background: #fff; border-radius: 10px; padding: 28px; border: 1px solid #e0e5ef; margin-bottom: 16px;">
          <p style="color: #13181f; font-size: 15px; font-weight: 600; margin: 0 0 12px;">
            Dear ${enquiry.name},
          </p>
          <p style="color: #4a566b; font-size: 14px; line-height: 1.8; margin: 0 0 16px;">
            Thank you for reaching out to us! We have received your enquiry and our team will get back to you <strong>within 1 business day</strong>.
          </p>
          <div style="background: #f6f9fd; border-radius: 8px; padding: 16px; border-left: 4px solid #0f9be7; margin-bottom: 16px;">
            <p style="color: #8494a9; font-size: 12px; margin: 0 0 6px; text-transform: uppercase;">Your Message</p>
            <p style="color: #4a566b; font-size: 14px; line-height: 1.7; margin: 0;">${enquiry.message}</p>
          </div>
          <p style="color: #4a566b; font-size: 14px; line-height: 1.8; margin: 0;">
            If you need immediate assistance, please call us at <strong>+91 9XXXXXXXXX</strong>.
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; color: #b0bac9; font-size: 12px;">
          <p style="margin: 0;">DIT Consultancy · Delhi · Greater Noida</p>
          <p style="margin: 4px 0 0;">© 2026 DIT Consultancy. All rights reserved.</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEnquiryNotification, sendEnquiryConfirmation };