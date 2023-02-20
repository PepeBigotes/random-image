const images = [
    "https://i.imgur.com/MrGY5EL.jpeg",
    "https://i.imgur.com/Dp2qTdu.jpeg",
    "https://i.imgur.com/AlBhvW8.jpeg"
  ];
  
  module.exports = (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    res.status(200).send(randomImage);
  };