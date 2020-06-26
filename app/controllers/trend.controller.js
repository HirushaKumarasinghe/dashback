var trendTypes = require("../models/project_types.json");

exports.drop = (req, res) => {
    res.status(200).json({trendTypes});
};
  