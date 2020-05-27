

const express = require('express');
const morgan =  require('morgan');
const path =  require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const exphbs = require('express-handlebars');



//inicializaciones

const app = express();
require('./database');

app.set('port',process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs',exphbs({  

defaultLayout:'main',
layoutsDir: path.join(app.get('views'), 'layouts'),
partialsDir: path.join(app.get('views'), 'partials'),
extname: '.hbs'

}))
app.set('view engine', 'hbs');



app.use(express.static(path.join(__dirname, 'public')));


//Middlewares

app.use(morgan('dev'));
app.use(express.json());


app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.urlencoded({extended:false}));

const storage =  multer.diskStorage({  

    destination: path.join(__dirname, 'public/uploads'),

filename: (req,file,callback)=>{

    callback(null, new Date().getTime() + path.extname(file.originalname));

}

});


app.use( function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });



app.use(multer({storage}).single('image'));

/* app.use('image'); */


//Routes
app.use(require('./routes'));

module.exports = app;


