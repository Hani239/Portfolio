// api/subscribe.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './.env.local' });

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define Schema
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// POST /api/subscribe
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'Email is required' });

    try {
        const existing = await Subscriber.findOne({ email });
        if (existing) return res.status(409).json({ message: 'Already subscribed' });

        const newSub = new Subscriber({ email });
        await newSub.save();

        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Error saving email:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
