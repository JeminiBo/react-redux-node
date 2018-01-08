var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
  app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });
  app.post('/api/signIn', (req, res) => {
   
    const details = { 'login': req.body.login, 'password': req.body.password};
    { 
    db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        if(item){
        res.send(item);
        }
        else{
          res.status('401').send('Пользователь не найден');
        }
      }
    });
  }
  });
app.post('/api', (req, res) => {
  const user = { name: req.body.name, login: req.body.login, password: req.body.password };
  
  db.collection('users').insert(user, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(result.ops[0]);
    }
  });
});
app.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('users').remove(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send('User ' + id + ' deleted!');
    }
  });
});
app.put('/api/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  const user = { name: req.body.name, login: req.body.login, password: req.body.password };
  db.collection('users').update(details, user, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(user);
    }
  });
}); 
};