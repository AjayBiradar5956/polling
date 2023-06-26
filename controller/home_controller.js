const Question = require("../model/question");

module.exports.home = function (req, res) {
    Question.find({})
        .then((doc) => {
            return res.render('home', {
                doc: doc,
            })
        })
        .catch((err) => {
            console.log(err);
            return;
        })
}