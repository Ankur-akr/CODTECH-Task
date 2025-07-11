import fs from 'fs';

const FILE_PATH = 'todos.json';

const readTodos = () => {
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
  } catch (e) {
    return [];
  }
};

const writeTodos = (todos) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
};

export const addTodo = (task) => {
  const todos = readTodos();
  todos.push({ id: todos.length + 1, task });
  writeTodos(todos);
  console.log('✅ Todo added.');
};

export const listTodos = () => {
  const todos = readTodos();
  if (todos.length === 0) return console.log('No todos found.');
  todos.forEach((todo) => {
    console.log(`${todo.id}. ${todo.task}`);
  });
};

export const removeTodo = (id) => {
  let todos = readTodos();
  const newTodos = todos.filter((todo) => todo.id !== parseInt(id));
  if (todos.length === newTodos.length) {
    return console.log('❌ Todo not found.');
  }
  writeTodos(newTodos);
  console.log('🗑️ Todo removed.');
};
