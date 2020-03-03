const express = require('express');
const fakeMovieList = require('./fakeMovieList');
const { toBoolean, toInt } = require('./stringUtils');
const app = express();
const port = process.env.PORT || 5000;

function getDelay(queryObj) {
  const { minDelay, maxDelay, instant } = queryObj;
  if (toBoolean(instant)) return 0;
  return Math.floor(Math.random() * toInt(maxDelay, 2000)) + toInt(minDelay, 200);
}

app.get('/search/:keyword', (req, res) => {
  const { keyword } = req.params;
  const delay = getDelay(req.query);
  const keywordLowerCase = keyword.toLowerCase();
  const matchMovieList = fakeMovieList.filter(
    movie => movie.title.toLowerCase().indexOf(keywordLowerCase) !== -1
  );
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  const timerId = setTimeout(() => {
    res.json(matchMovieList);
  }, delay);

  handleCancelledRequest(req, res, timerId);
});

function handleCancelledRequest(req, res, timerId) {
  req.on('aborted', requestCancelled);
  req.on('close', requestCancelled);

  function requestCancelled() {
    clearTimeout(timerId);
    res.end();
    // just to fully clean up
    req.off('aborted', requestCancelled);
    req.off('close', requestCancelled);
  }
}

app.listen(port, (error) => {
  if (error) {
    console.error('Server start fail.', error);
    return;
  }
  console.log(`Server started on http://localhost:${port}`);
});
