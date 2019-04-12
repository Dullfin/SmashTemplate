const express = require('express');
const path = require('path');
var hbs = require('hbs');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
const jimpFunction = require('../public/js/imageReplace');
var multer = require('multer');
// var Jimp = require('jimp');
const app = express();
var upload = multer();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

const middleWare = [
express.static(publicDirectoryPath),
bodyParser.urlencoded({extended: true}),
bodyParser.json(),
upload.array()
];

app.use(middleWare);

// Get and render main index page
app.get('/',(req,res) => {
    res.render('index', {
        title: 'Smash Template',
        name: 'Dullfin',
    })
})

app.post('/',(req,res) => {
    res.send("received request");
    module.exports.tournamentNumber = req.body.tournamentNumber;

    module.exports.color1 = req.body.color1;
    module.exports.character1 = req.body.character1;
    module.exports.user1 = req.body.user1;

    module.exports.color2 = req.body.color2;
    module.exports.character2 = req.body.character2;
    module.exports.user2 = req.body.user2;

    module.exports.color3 = req.body.color3;
    module.exports.character3 = req.body.character3;
    module.exports.user3 = req.body.user3;

    module.exports.color4 = req.body.color4;
    module.exports.character4 = req.body.character4;
    module.exports.user4 = req.body.user4;

    module.exports.color5 = req.body.color5;
    module.exports.character5 = req.body.character5;
    module.exports.user5 = req.body.user5;

    module.exports.color6 = req.body.color6;
    module.exports.character6 = req.body.character6;
    module.exports.user6 = req.body.user6;

    module.exports.color7 = req.body.color7;
    module.exports.character7 = req.body.character7;
    module.exports.user7 = req.body.user7;

    module.exports.color8 = req.body.color8;
    module.exports.character8 = req.body.character8;
    module.exports.user8 = req.body.user8;

    jimpFunction.jimpReplace();
})

// Port to listen on.
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

