import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addTodo, listTodos, removeTodo } from './services/todoService.js';

const argv = yargs(hideBin(process.argv))
  .command('add <task>', 'Add a new todo', {}, (args) => {
    addTodo(args.task);
  })
  .command('list', 'List all todos', {}, () => {
    listTodos();
  })
  .command('remove <id>', 'Remove a todo by id', {}, (args) => {
    removeTodo(args.id);
  })
  .demandCommand()
  .help()
  .argv;
