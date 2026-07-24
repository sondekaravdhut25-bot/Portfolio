const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth'); // Import the middleware
const nodemailer = require('nodemailer');
const { Resend } = require("resend");


const resend = new Resend(process.env.RESEND_API_KEY);

// POST a new contact message (Public)
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // 2. Save to MongoDB First
    const newMessage = new Message({ name, email, message });
    const savedMessage = await newMessage.save();


    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      text: `
          Name: ${name}

          Email: ${email}

          Message:
          ${message}`,
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