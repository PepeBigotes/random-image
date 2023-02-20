const images = [
    'https://i.imgur.com/MrGY5EL.jpeg',
    'https://i.imgur.com/Dp2qTdu.jpeg',
    'https://i.imgur.com/AlBhvW8.jpeg'
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];

  export default (req, res) => {
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(randomImage);
  };