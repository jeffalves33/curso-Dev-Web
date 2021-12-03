/*rotas referentes ao jobs serão criadas aqui */
const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
});

// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Job.findOne({
        where: {id: req.params.id}
    }).then(job => {

        res.render('view', {
            job
        });

    }).catch(err => console.log(err)));

// add job via post
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, newJob, createdAt, updatedAt} = req.body;

    //inserir 
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        newJob,
        createdAt,
        updatedAt
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;