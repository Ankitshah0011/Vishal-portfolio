import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['Frontend', 'Backend', 'Full Stack', 'Database', 'Cloud', 'DevOps', 'AI', 'Tools'],
        required: true 
    },
    level: { type: Number, default: 80 }, // 0-100
    icon: String
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
