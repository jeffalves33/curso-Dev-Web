const express    = require('express');
const handlebars = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Job        = require('./models/Job');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
var hbs = handlebars.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
});
app.use(bodyParser.urlencoded({extended:true}));
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');
app.set('views', __dirname + '/views');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });

// routes
app.get('/', (req, res) => {

  let search = req.query.job;
  let query  = '%'+search+'%'; // PH -> PHP, Word -> Wordpress, press -> Wordpress

  if(!search) {
    Job.findAll({order: [
      ['createdAt', 'DESC']
    ]})
    .then(jobs => {
  
      res.render('index', {
        jobs
      });
  
    })
    .catch(err => console.log(err));
  } else {
    Job.findAll({
      where: {title: {[Op.like]: query}},
      order: [
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {
      console.log(search);
      console.log(search);
  
      res.render('index', {
        jobs, search
      });
  
    })
    .catch(err => console.log(err));
  }

  
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));