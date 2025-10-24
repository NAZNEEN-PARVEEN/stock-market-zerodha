const {model} = require("mongoose");

const {OrdersSchemas} = require("../schemas/OrdersSchemas");

const OrdersModel = new model("holding",OrdersSchemas);

module.exports = {OrdersModel};