const express = require('express')
const {addReview,GetReview} = require('../../controllers/Shop/Review_controller')


const router = express.Router();

router.post('/add', addReview);
router.get('/:productId', GetReview);


 
module.exports = router;