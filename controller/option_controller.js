const Option = require('../model/options');
const Question = require('../model/question');

module.exports.create = function (req, res) {
    Option.create({
        option: req.body.option,
        question: req.params.id,
    })
        .then((createdDoc) => {
            let path = `http://localhost:8000/option/vote/${createdDoc.id}`;
            let id = createdDoc.id;
            Option.findByIdAndUpdate(id, { link_to_vote: path })
                .then(() => {
                    return res.redirect('back');
                })

        })
}

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
        .then((updatedOption) => {
            return res.redirect('back');
        })
}