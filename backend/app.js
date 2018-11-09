const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fad123122',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'fad1aserr',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    }
  ];
  return res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
