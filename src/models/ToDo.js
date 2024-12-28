const { Schema, model } = require('mongoose');

const ToDoSchema = new Schema({
  item_name: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  }
}, { collection: 'todo' });

const ToDo = model('todo', ToDoSchema);
module.exports = ToDo;