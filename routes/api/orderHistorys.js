const express = require('express');
const router = express.Router();
const orderHistoryCtrl = require('../../controllers/api/orderHistorys');

router.get('/', orderHistoryCtrl.orderHistory);

module.exports = router;
