var culture = require("../models/culture.json");
var general = require("../models/general.json");
var workLife = require("../models/worklife.json");
var leadership = require("../models/leader.json");
var empdev = require("../models/empdev.json");

exports.startQ = (req, res) => {
    var qt = req.body.qtype;
    var gen = req.body.general;

    if(gen){
        if(qt == "culture"){
            res.status(200).json({questions:culture,general_questions:general});
        }
        else if(qt == "work"){
            res.status(200).json({questions:workLife,general_questions:general});
        }
        else if(qt == "leader"){
            res.status(200).json({questions:leadership,general_questions:general});
        }
        else if(qt == "empdev"){
            res.status(200).json({questions:empdev,general_questions:general});
        }
        else{
            res.status(400);
        }
    }
    else{
        if(qt == "culture"){
            res.status(200).json({questions:culture});
        }
        else if(qt == "work"){
            res.status(200).json({questions:workLife});
        }
        else if(qt == "leader"){
            res.status(200).json({questions:leadership});
        }
        else if(qt == "empdev"){
            res.status(200).json({questions:empdev});
        }
        else{
            res.status(400);
        }
    }
};


exports.answers = (req, res) => {
    res.status(200).send({message:"success"});
};
  

