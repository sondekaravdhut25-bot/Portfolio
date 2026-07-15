const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  techStack: { 
    type: [String], 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: false 
  },
  liveSiteUrl: { 
    type: String, 
    required: false 
  }
});

module.exports = mongoose.model('Project', ProjectSchema);