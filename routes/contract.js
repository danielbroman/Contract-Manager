const express = require('express');
const router = express.Router();

const {
    convertContractToPdf,
    createContract, 
    deleteContract, 
    getAllContracts, 
    getContractById, 
    updateContract
} = require('../controllers/contractcontroller');
const {authorizeRequest} = require('../middleware/auth');

router.route('/')
    .get(authorizeRequest, getAllContracts)
    .post(authorizeRequest, createContract);
router.route('/:contractId')
    .get(authorizeRequest, getContractById)
    .put(authorizeRequest, updateContract)
    .delete(authorizeRequest, deleteContract);

router.route('/pdf/:contractId')
    .get(authorizeRequest, convertContractToPdf);

module.exports = router;