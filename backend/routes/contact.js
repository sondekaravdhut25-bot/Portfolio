const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth'); // Import the middleware
const nodemailer = require('nodemailer');


 // 1. Configure the NodeMailer Transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

//update
// 1. Configure the NodeMailer Transporter (Strict Configuration)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Changed from 465 to 587
  secure: false, // Must be false for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Bypasses strict SSL certificate checks on cloud servers
  },
  family: 4
});

// POST a new contact message (Public)
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // 2. Save to MongoDB First
    const newMessage = new Message({ name, email, message });
    const savedMessage = await newMessage.save();

    // 3. Setup the Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to yourself
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    // 4. Send the Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        // We still return 201 because the message saved to the DB successfully
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all messages (Protected Admin Route)
router.get('/messages', auth, async (req, res) => {
  try {
    // Fetch all messages and sort by newest first
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete('/messages/:id', auth, async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;