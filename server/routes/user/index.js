const _ = require('lodash');
const { User } = require('../../models/');

function postUsers(req, res) {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);

  user
    .save()
    .then(() => user.generateAuthToken())
    .then((token) => {
      res.header('x-auth', token).send(user);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
}

function getMe(req, res) {
  res.send(req.user);
}

function postUserLogin(req, res) {
  const body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password)
    .then(user => user.generateAuthToken()
      .then((token) => {
        res.header('x-auth', token).send(user);
      }))
    .catch(() => {
      res.status(400).send();
    });
}

function deleteMyToken(req, res) {
  req.user
    .removeToken(req.token)
    .then(() => {
      res.status(200).send();
    })
    .catch(() => {
      res.status(400).send();
    });
}

module.exports = {
  postUsers,
  postUserLogin,
  getMe,
  deleteMyToken
};
