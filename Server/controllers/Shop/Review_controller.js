const ReviewModel = require("../../Model/Review")
const ProductModel = require("../../Model/Product")
const addReview = async (req, res) => {
    try {
        const { productId, userId, userName, reviewMessage, reviewValue } = req.body;

        const product = await ProductModel.findById(productId);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        const newReview = new ReviewModel({
            productId,
            userId,
            userName,
            reviewMessage,
            reviewValue,
        });

        await newReview.save();

        const reviews = await ReviewModel.find({ productId });
        const totalReviewLength = reviews.length;
        const avgReview = reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) / totalReviewLength;

        await ProductModel.findByIdAndUpdate(productId, { avgReview });

        return res.status(200).json({
            success: true,
            data: newReview,
        });
    } catch (e) {
        console.log("Error adding review:", e);
        res.status(500).json({
            success: false,
            message: "Error in adding review",
        });
    }
};

const GetReview= async (req,res) =>{
    try{
        const{productId} = req.params;
        const review = await ReviewModel.find({productId});

        res.status(200).json({
                success:true,
                data:review,
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message: "error in adding review"
        })
    }
}
module.exports = {GetReview, addReview}