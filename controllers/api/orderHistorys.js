const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
    orderHistory,
};

// Order history of User
async function orderHistory(req, res) {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ user: userId });
        console.log(orders);
        res.json(orders);
    } catch (error) {
        console.log(error);
    }
}
