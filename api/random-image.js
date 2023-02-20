const https = require('https');

const images = [
    "https://i.imgur.com/MrGY5EL.jpeg",
    "https://i.imgur.com/Dp2qTdu.jpeg",
    "https://i.imgur.com/AlBhvW8.jpeg"
  ];
  
  module.exports = (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
  
    https.get(randomImage, (response) => {
      res.setHeader('Content-Type', 'image/jpeg');
      response.pipe(res);
    });
  };