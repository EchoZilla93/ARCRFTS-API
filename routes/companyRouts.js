const express = require('express');
const {
    getAllCompanies,
    getCompanyById
} = require('./../controllers/companyController');

const router = express.Router();

router.param('id',(req, res, next,val ) => {
    console.log(`company id is : ${val}`);
    next();
})

router.route('/').get(getAllCompanies);
router.route('/:id').get(getCompanyById);

module.exports = router;