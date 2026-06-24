import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: String,
    title: String,
    about: String,
    email: String,
    phone: String,
    location: String,
    socialLinks: {
        github: String,
        linkedin: String,
        twitter: String,
        portfolio: String
    },
    resumeUrl: String,
    profilePhotoUrl: String
}, { timestamps: true });

export default mongoose.model('Profile', profileSchema);
