var jimp = require('jimp');

function imagePromise() {

var images = ['stock-icons/black Bowser.png', 'stock-icons/black Captain Falcon.png', 'stock-icons/black Doctor Mario.png',
'stock-icons/black Donkey Kong.png', 'stock-icons/black Link.png', 'stock-icons/black Marth.png', 'stock-icons/black Young Link.png', 
'stock-icons/blue Bowser.png','stock-icons/blue Captain Falcon.png','stock-icons/blue Doctor Mario.png', 'stock-icons/blue Donkey Kong.png', 
'stock-icons/blue Falco.png', 'stock-icons/blue Fox.png','stock-icons/blue Ganondorf.png','stock-icons/blue Kirby.png','stock-icons/blue Link.png',
'stock-icons/blue Link.png','stock-icons/blue Luigi.png','stock-icons/blue Mario.png','stock-icons/blue Mewtwo.png','stock-icons/blue Mr. Game & Watch.png',
'stock-icons/blue Ness.png','stock-icons/blue Peach.png','stock-icons/blue Pichu.png','stock-icons/blue Pikachu.png','stock-icons/blue Roy.png','stock-icons/blue Samus.png',
'stock-icons/blue Yoshi.png','stock-icons/blue Young Link.png','stock-icons/blue Zelda.png','stock-icons/bow Jigglypuff.png','stock-icons/brown Mario.png', 'stock-icons/brown Samus.png', 
'stock-icons/Crazy Hand.png','stock-icons/crown Jigglypuff.png','stock-icons/cyan Yoshi.png','stock-icons/daisy Peach.png','stock-icons/flower Jigglypuff.png', 'stock-icons/Giga Bowser.png', 
'stock-icons/green Captain Falcon.png', 'stock-icons/green Doctor Mario.png', 'stock-icons/green Donkey Kong.png', 'stock-icons/green Falco.png', 'stock-icons/green Fox.png', 'stock-icons/green Ganondorf.png', 
'stock-icons/green Ice Climbers.png', 'stock-icons/green Kirby.png', 'stock-icons/green Mario.png', 'stock-icons/green Marth.png', 'stock-icons/green Mewtwo.png', 'stock-icons/green Mr. Game & Watch.png', 
'stock-icons/green Ness.png', 'stock-icons/green Peach.png', 'stock-icons/green Pichu.png', 'stock-icons/green Pikachu.png', 'stock-icons/green Roy.png', 'stock-icons/green Samus.png', 
'stock-icons/green Zelda.png', 'stock-icons/headband Jigglypuff.png',  'stock-icons/lavender Zelda.png', 'stock-icons/Master Hand.png', 'stock-icons/neutral Bowser.png', 'stock-icons/neutral Captain Falcon.png', 
'stock-icons/neutral Doctor Mario.png', 'stock-icons/neutral Donkey Kong.png', 'stock-icons/neutral Falco.png', 'stock-icons/neutral Fox.png', 'stock-icons/neutral Ganondorf.png', 'stock-icons/neutral Ice Climbers.png', 
'stock-icons/neutral Jigglypuff.png', 'stock-icons/neutral Kirby.png', 'stock-icons/neutral Link.png', 'stock-icons/neutral Luigi.png', 'stock-icons/neutral Mario.png', 'stock-icons/neutral Marth.png', 
'stock-icons/neutral Mewtwo.png', 'stock-icons/neutral Mr. Game & Watch.png', 'stock-icons/neutral Ness.png', 'stock-icons/neutral Peach.png', 'stock-icons/neutral Pichu.png', 'stock-icons/neutral Pikachu.png', 
'stock-icons/neutral Roy.png', 'stock-icons/neutral Samus.png', 'stock-icons/neutral Yoshi.png', 'stock-icons/neutral Young Link.png', 'stock-icons/neutral Zelda.png', 'stock-icons/orange Ice Climbers.png', 
'stock-icons/pink Luigi.png', 'stock-icons/pink Yoshi.png', 'stock-icons/purple Ganondorf.png', 'stock-icons/red Bowser.png', 'stock-icons/red Captain Falcon.png', 'stock-icons/red Doctor Mario.png', 
'stock-icons/red Donkey Kong.png', 'stock-icons/red Falco.png', 'stock-icons/red Fox.png', 'stock-icons/red Ganondorf.png', 'stock-icons/red Ice Climbers.png', 'stock-icons/red Kirby.png', 
'stock-icons/red Link.png', 'stock-icons/red Marth.png', 'stock-icons/red Mewtwo.png', 'stock-icons/red Mr. Game & Watch.png', 'stock-icons/red Pichu.png', 'stock-icons/red Pikachu.png', 
'stock-icons/red Roy.png', 'stock-icons/red Samus.png', 'stock-icons/red Yoshi.png', 'stock-icons/red Young Link.png', 'stock-icons/red Zelda.png', 'stock-icons/Sandbag.png', 
'stock-icons/white Captain Falcon.png', 'stock-icons/white Kirby.png', 'stock-icons/white Link.png', 'stock-icons/white Luigi.png', 'stock-icons/white Marth.png', 
'stock-icons/white Peach.png', 'stock-icons/white Young Link.png', 'stock-icons/Wireframe.png', 'stock-icons/yellow Kirby.png', 'stock-icons/yellow Mario.png', 
'stock-icons/yellow Ness.png', 'stock-icons/yellow Roy.png', 'stock-icons/yellow Yoshi.png']

var jimps = [];
for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
}

Promise.all(jimps).then(function(data) {
    return Promise.all(jimps);
})
}
exports = imagePromise();