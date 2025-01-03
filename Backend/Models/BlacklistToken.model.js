import mongoose from 'mongoose';

const BlacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // 24 hours in seconds
    },
});

const BlacklistedToken = mongoose.model('BlacklistedToken', BlacklistedTokenSchema);

export  {BlacklistedToken};
