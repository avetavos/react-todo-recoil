import { atom, selector } from 'recoil';

import Todo from '../interfaces/todo';

export const todos = atom<Todo[]>({
  key: 'todos',
  default: [],
});

export const getAllTodo = selector({
  key: 'getAllTodo',
  get: ({ get }) => {
    const allTodos = get(todos);
    return allTodos;
  },
});

export const summaryTodo = selector({
  key: 'summaryTodo',
  get: ({ get }) => {
    const todoList = get(todos);
    const totalTodo = todoList.length;
    const totalCompletedTodo = todoList.filter((item) => item.completed).length;
    const totalUncompletedTodo = totalTodo - totalCompletedTodo;

    return {
      totalTodo,
      totalCompletedTodo,
      totalUncompletedTodo,
    };
  },
});
