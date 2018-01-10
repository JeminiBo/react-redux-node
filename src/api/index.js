import request from 'superagent';

export const signUp = (userName, userLogin, pass) => {
  return new Promise((resolve, reject) => {
    request
      .post('http://localhost:8000/api')
      .send({ name: userName, login: userLogin, password: pass })
      .set('Content-Type', 'application/json')
      .then(res => resolve(alert('Пользователь зарегистрирован')))
      .catch(err => reject(new Error(err.message)));
  });
};

export const signIn = (userLogin, pass) => {
  return new Promise((resolve, reject) => {
    request
      .post('http://localhost:8000/api/signIn')
      .send({ login: userLogin, password: pass })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(res => resolve(res.body))
      .catch(err => reject(new Error(err.message)));
  });
};