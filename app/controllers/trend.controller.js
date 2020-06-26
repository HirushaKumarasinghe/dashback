var trendTypes = require("../models/project_types.json");

var java_dev = require("../models/java.json");
var c_dev = require("../models/c.json");
var js_dev = require("../models/node.json");

exports.drop = (req, res) => {
    res.status(200).json({trendTypes});
};

exports.employeeFilter = (req, res) => {
    var type = req.body.type;

    if(type == "node"){
        res.status(200).json({js_dev});
    }
    else if(type == "java"){
        res.status(200).json({java_dev});
    }
    else if(type == "c"){
        res.status(200).json({c_dev});
    }
    else{
        res.status(400).send({message:"error"});

    }
};
  