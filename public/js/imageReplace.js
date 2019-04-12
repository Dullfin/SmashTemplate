var Jimp = require('jimp');
var serverSide = require('../../src/app');

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

                                                                    Jimp.read('../images/stockPhoto612.jpg')
                                                                        .then((image) => {
                                                                            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
                                                                            .then(font => {
                                                                                image.clone()
                                                                                .print(font, Jimp.HORIZONTAL_ALIGN_CENTER, Jimp.VERTICAL_ALIGN_TOP, 'Louisiana Weekly #' + tournamentNumber)

                                                                                .print(font, 200, 50, user1)
                                                                                .print(font, 200, 90, user2)
                                                                                .print(font, 200, 130, user3)
                                                                                .print(font, 200, 170, user4)
                                                                                .print(font, 200, 210, user5)
                                                                                .print(font, 200, 250, user6)
                                                                                .print(font, 200, 290, user7)
                                                                                .print(font, 200, 330, user8)
                                                                                
                                                                                .composite(img1, 400, 50)
                                                                                .composite(img2, 400, 90)
                                                                                .composite(img3, 400, 130)
                                                                                .composite(img4, 400, 170)
                                                                                .composite(img5, 400, 210)
                                                                                .composite(img6, 400, 250)
                                                                                .composite(img7, 400, 290)
                                                                                .composite(img8, 400, 330)
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