const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {  
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,  // Correctly define the type as Number
                required: true,
                min: 1,
            }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);  // Use 'mongoose.model' to create the model
