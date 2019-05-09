var Jimp = require('jimp');
var serverSide = require('../../src/app');

var backgroundImg = '../images/UATH_Top_8.png';
var fontPath = '../fonts/DINBlackAlternate.fnt';
var titleHorizontal = 250;
var titleVertical = 200;
var imgHorizontal = 700;
var fontHorizontal = 300;
var posVertical1 = 325;
var posVertical2 = posVertical1 + 75;
var posVertical3 = posVertical2 + 75;
var posVertical4 = posVertical3 + 75;
var posVertical5 = posVertical4 + 75;
var posVertical6 = posVertical5 + 75;
var posVertical7 = posVertical6 + 75;
var posVertical8 = posVertical7 + 75;
var stockResize = 64;

module.exports.jimpReplace = function () {
    const tournamentNumber = serverSide.tournamentNumber;

    const character1 = serverSide.character1
    const color1 = serverSide.color1
    const iconPath1 = '../stock-icons/' + color1 + ' ' + character1 + '.png';
    const user1 = serverSide.user1

    const character2 = serverSide.character2
    const color2 = serverSide.color2
    const iconPath2 = '../stock-icons/' + color2 + ' ' + character2 + '.png';
    const user2 = serverSide.user2
    
    const character3 = serverSide.character3
    const color3 = serverSide.color3
    const iconPath3 = '../stock-icons/' + color3 + ' ' + character3 + '.png';
    const user3 = serverSide.user3

    const character4 = serverSide.character4
    const color4 = serverSide.color4
    const iconPath4 = '../stock-icons/' + color4 + ' ' + character4 + '.png';
    const user4 = serverSide.user4

    const character5 = serverSide.character5
    const color5 = serverSide.color5
    const iconPath5 = '../stock-icons/' + color5 + ' ' + character5 + '.png';
    const user5 = serverSide.user5

    const character6 = serverSide.character6
    const color6 = serverSide.color6
    const iconPath6 = '../stock-icons/' + color6 + ' ' + character6 + '.png';
    const user6 = serverSide.user6

    const character7 = serverSide.character7
    const color7 = serverSide.color7
    const iconPath7 = '../stock-icons/' + color7 + ' ' + character7 + '.png';
    const user7 = serverSide.user7

    const character8 = serverSide.character8
    const color8 = serverSide.color8
    const iconPath8 = '../stock-icons/' + color8 + ' ' + character8 + '.png';
    const user8 = serverSide.user8

    console.log(iconPath1)

    Jimp.read(iconPath1)
        .then((img1) => {
            Jimp.read(iconPath2)
                .then((img2) => {
                    Jimp.read(iconPath3)
                        .then((img3) => {
                            Jimp.read(iconPath4)
                                .then((img4) => {
                                    Jimp.read(iconPath5)
                                        .then((img5) => {
                                            Jimp.read(iconPath6)
                                                .then((img6) => {
                                                    Jimp.read(iconPath7)
                                                        .then((img7) => {
                                                            Jimp.read(iconPath8)
                                                                .then((img8) => {
                                                                    Jimp.read(backgroundImg)
                                                                        .then((image) => {
                                                                            image.resize(1058,1216);
                                                                            Jimp.loadFont(fontPath)
                                                                            .then(font => {
                                                                                image.clone()
                                                                                .print(font, titleHorizontal, titleVertical, tournamentNumber)

                                                                                .print(font, fontHorizontal, posVertical1, user1)
                                                                                .print(font, fontHorizontal, posVertical2, user2)
                                                                                .print(font, fontHorizontal, posVertical3, user3)
                                                                                .print(font, fontHorizontal, posVertical4, user4)
                                                                                .print(font, fontHorizontal, posVertical5, user5)
                                                                                .print(font, fontHorizontal, posVertical6, user6)
                                                                                .print(font, fontHorizontal, posVertical7, user7)
                                                                                .print(font, fontHorizontal, posVertical8, user8)
                                                                                
                                                                                .composite(img1.resize(stockResize, stockResize), imgHorizontal, posVertical1)
                                                                                .composite(img2.resize(stockResize,stockResize), imgHorizontal, posVertical2)
                                                                                .composite(img3.resize(stockResize,stockResize), imgHorizontal, posVertical3)
                                                                                .composite(img4.resize(stockResize,stockResize), imgHorizontal, posVertical4)
                                                                                .composite(img5.resize(stockResize,stockResize), imgHorizontal, posVertical5)
                                                                                .composite(img6.resize(stockResize,stockResize), imgHorizontal, posVertical6)
                                                                                .composite(img7.resize(stockResize,stockResize), imgHorizontal, posVertical7)
                                                                                .composite(img8.resize(stockResize,stockResize), imgHorizontal, posVertical8)
                                                                                .write('../images/stockPhotoTest.png')
                                                                            })
                                                                            
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
}