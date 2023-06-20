module.exports = app => {
  const students = require('../controllers/student.controller');

  app.get('/students', students.getAll);
  app.post('/students', students.createStudent);
  app.get('/students/:id', students.getById);
  app.put('/students/:id', students.updateById);
  app.delete('/students/:id', students.deleteById);
};
