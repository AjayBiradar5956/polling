const Option = require('../model/options');
const Question = require('../model/question');


module.exports.delete = function (req, res) {
    Option.deleteOne({ _id: req.params.id })
        .then(() => {
            return res.redirect('back');
        }).catch((err) => {
            return console.log(err);
        })
}

module.exports.vote = function (req, res) {
    let optionId = req.params.id;
    Option.findByIdAndUpdate(optionId, { $inc: { vote: 1 } })
        .then(() => {
            return res.redirect('back');
        })
}