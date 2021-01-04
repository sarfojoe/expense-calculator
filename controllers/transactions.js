// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public

exports.getTransactions = (req, res, next) => {
    res.send("GET transactions");
};

// @desc    Add transactions
// @route   POST /api/v1/transactions
// @access  Public

exports.addTransaction = (req, res, next) => {
    res.send("POST transaction");
};

exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE transaction");
};