const images = [
    'https://i.imgur.com/MrGY5EL.jpeg',
    'https://i.imgur.com/Dp2qTdu.jpeg',
    'https://i.imgur.com/AlBhvW8.jpeg'
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const https = require('https');
  
  module.exports = (req, res) => {
    https.get(randomImage, (response) => {
      let data = '';
      response.setEncoding('binary');
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const dataUri = 'data:image/jpeg;base64,' + base64Image;
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(dataUri);
      });
    });
  };