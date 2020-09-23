var data_set = require("../models/employee.json");
var multi_set = require("../models/employee.json");
var image_set = require("../models/employee.json");

// exports.scorecard = (req, res) => {
//     res.status(200).json({data_set});
// };
exports.scorecard = (req, res) => {

    var img = req.body.imgq;

    if(img){
        res.status(200).json({image_set});
    }
    else{
        res.status(200).json({multi_set});
    }
};
  