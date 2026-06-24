import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    duration: String,
    responsibilities: [String],
    technologies: [String],
    startDate: Date,
    endDate: Date,
    currentlyWorking: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Experience', experienceSchema);
