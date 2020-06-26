var data_set = require("../models/employee.json");

exports.scorecard = (req, res) => {
    res.status(200).json({data_set});
};
  