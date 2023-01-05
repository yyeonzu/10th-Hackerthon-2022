const express = require('express');
const session = require('express-session');
const app = express();

const authRouter = require('./auth.js');
// const authCheck = require('./authCheck.js');
// const template = require('./template.js');

const PORT = 5500;
// app.set('port', 5500);

app.get('/', (req, res) => {
  res.send('서버 실행중!');
  console.log('서버 실행중입니다....');
});

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`서버가 실행됩니다. http://localhost:${PORT}`);
});
