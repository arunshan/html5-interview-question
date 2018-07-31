const express = require('express');
const fakeMovieList = require('./fakeMovieList');
const app = express();
const port = process.env.PORT || 5000;

app.get('/search/:keyword', (req, res) => {
  const { keyword } = req.params;
  const matchMovieList = fakeMovieList.filter(
    movie => movie.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  res.json(matchMovieList);
});

app.listen(port, (error) => {
  if (error) {
    console.error('Server start fail.', error);
    return;
  }
  console.log(`Server started on http://localhost:${port}`);
});
