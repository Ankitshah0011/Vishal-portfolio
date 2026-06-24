import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import Profile from '../models/Profile.js';
import Skill from '../models/Skill.js';
import Project from '../models/Project.js';
import Experience from '../models/Experience.js';

export const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }

        try {
            const dataBuffer = fs.readFileSync(req.file.path);
            const data = await pdf(dataBuffer);
            
            const extractedText = data.text;
            console.log('Extracted Resume Text:', extractedText);

            // Simple heuristic-based extraction
            const profileInfo = {
                name: extractName(extractedText),
                email: extractEmail(extractedText),
                phone: extractPhone(extractedText),
                about: "Extracted from resume.",
                resumeUrl: `/resume.pdf`
            };

            // Save profile
            await Profile.findOneAndUpdate({}, profileInfo, { upsert: true, new: true });
        } catch (parseErr) {
            console.warn('PDF Parsing failed, but file was uploaded:', parseErr.message);
        }

        res.status(200).json({ 
            message: 'Resume uploaded successfully!',
            url: '/resume.pdf'
        });

    } catch (error) {
        console.error('Resume Parsing Error:', error);
        res.status(500).json({ message: 'Error processing resume', error: error.message });
    }
};

// Helper functions for basic extraction
function extractEmail(text) {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const match = text.match(emailRegex);
    return match ? match[0] : '';
}

function extractPhone(text) {
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    const match = text.match(phoneRegex);
    return match ? match[0] : '';
}

function extractName(text) {
    // Usually the first line or a capitalized string at the beginning
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    return lines[0] || 'Unknown User';
}
