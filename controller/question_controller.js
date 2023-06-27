const Question = require('../model/question');
const Option = require('../model/options');

module.exports.createOpt = function (req, res) {
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

module.exports.createQue = function (req, res) {
    let inputQuestion = req.body.question.toLowerCase();
    Question.findOne({ question: inputQuestion })
        .then((doc) => {
            if (!doc) {
                Question.create({
                    question: inputQuestion,
                })
                    .then(() => {
                        return res.redirect('/');
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({ error: 'An error occurred while creating the question' });
                    });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "An error while finding question in DB" });
        })

};

module.exports.deleteQue = function (req, res) {
    Question.deleteOne({ _id: req.params.id })
        .then(() => {
            Option.deleteMany({ question: req.params.id })
                .then(() => {
                    return res.redirect('back');
                })

        }).catch((err) => {
            return console.log(err);
        })
}

module.exports.viewQue = function (req, res) {
    Question.findOne({ _id: req.params.id })
        .then((doc) => {
            Option.find({ question: req.params.id })
                .then((opt) => {
                    return res.render('question', {
                        doc,
                        opt,
                    });
                })
                .catch((err) => {
                    return console.log(err);
                })

        })
}