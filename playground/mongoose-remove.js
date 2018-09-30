const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5bb0a0104dd69ece8dbeaede'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5bb0a0104dd69ece8dbeaede').then((todo) => {
  console.log(todo);
});
