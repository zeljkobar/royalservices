const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Royal Services Backend is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and message' 
      });
    }

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from Royal Services website - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from Royal Services Contact Form</small></p>
      `
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Royal Services Montenegro',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <h3>Your Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><strong>Royal Services Montenegro</strong></p>
        <p>Phone: <a href="tel:+38267573413">+382 67 573 413</a></p>
        <p>Email: <a href="mailto:royalservicesme@gmail.com">royalservicesme@gmail.com</a></p>
        <p>Website: <a href="https://royalservices.me">royalservices.me</a></p>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Transfer form endpoint
app.post('/api/transfer', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      pickup, 
      destination, 
      date, 
      time, 
      passengers, 
      message 
    } = req.body;

    // Validate required fields
    if (!name || !email || !pickup || !destination || !date || !time || !passengers) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Transfer Request - ${name} (${pickup} → ${destination})`,
      html: `
        <h2>New Transfer Request</h2>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        
        <h3>Transfer Details</h3>
        <p><strong>Pickup Location:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        
        ${message ? `<h3>Additional Information</h3><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        
        <hr>
        <p><small>Sent from Royal Services Transfer Form</small></p>
      `
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Transfer Request Confirmation - Royal Services Montenegro',
      html: `
        <h2>Transfer Request Received!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for choosing Royal Services Montenegro. We have received your transfer request and will confirm shortly.</p>
        
        <h3>Your Transfer Details:</h3>
        <p><strong>From:</strong> ${pickup}</p>
        <p><strong>To:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        ${message ? `<p><strong>Notes:</strong> ${message}</p>` : ''}
        
        <p>We will contact you soon to confirm your booking and provide additional details.</p>
        
        <hr>
        <p><strong>Royal Services Montenegro</strong></p>
        <p>Phone: <a href="tel:+38267573413">+382 67 573 413</a></p>
        <p>Email: <a href="mailto:royalservicesme@gmail.com">royalservicesme@gmail.com</a></p>
        <p>Website: <a href="https://royalservices.me">royalservices.me</a></p>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ 
      success: true, 
      message: 'Your transfer request has been sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send request. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Royal Services Backend running on port ${PORT}`);
});
