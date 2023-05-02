const https = require('https');

const imagesList = require('../lists/swag-wallpapers-list.json');
const images = imagesList.images;
  
  module.exports = (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    console.log("Image: " + randomImage);
  
    https.get(randomImage, (response) => {
      res.setHeader('Content-Type', 'image/jpeg');
      response.pipe(res);
    });
  };