const express = require('express');
const router = express.Router();

const db = require('./db');

// 로그인
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.pwd;

  if (username && password) {
    db.query(
      'SELECT * FROM test_users WHERE userID = ? AND password = ?',
      [username, password],
      function (err, results, fields) {
        if (err) throw err;
        if (results.length > 0) {
          //   req.session.is_logined = true;
          //   req.session.nickname = results[0].userID;
          //   req.session.save(() => {
          //     console.log(req.session.is_logined);
          //     res.redirect('/');
          //   });
        }
      }
    );
  }
});

router.get('/test', (req, res) => {
  res.send('테스트');
});

router.get('/logout', (req, res) => {
  //   req.session.destroy((err) => {
  //     res.redirect('/');
  //   });
});

// 회원가입
router.post('/register', (req, res) => {
  console.log(req);
  const nickname = req.body.nickname;
  const userID = req.body.userID;
  const password = req.body.password;

  console.log(nickname, userID, password);

  if (nickname && password && userID) {
    db.query(
      'SELECT * FROM users WHERE userID = ?',
      [userID],
      function (error, results, fields) {
        console.log(results);
        // DB에 같은 이름의 회원아이디가 있는지 확인
        if (results.length <= 0 && password) {
          // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
          db.query(
            'INSERT INTO users (nickname, userID, password) VALUES(?,?,?)',
            [nickname, userID, password],
            function (error, data) {
              res.send('회원가입 성공');
            }
          );
        } else {
          // DB에 같은 이름의 회원아이디가 있는 경우
          res.send('같은 아이디가 존재합니다');
          res.status(409).json({ msg: '이미 존재하는 아이디' });
        }
      }
    );
  } else {
    res.send('입력안한정보가들어옴');
  }
});

module.exports = router;
