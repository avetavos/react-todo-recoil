import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { Input } from 'antd';
// interface
import Todo from '../../interfaces/todo';
// store
import { todos as todoAtom } from '../../store';

const { Search } = Input;

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');

  const setTodoList = useSetRecoilState<Todo[]>(todoAtom);

  const createTodo = async (title: string) => {
    const newTodo: Todo = {
      userId: 1,
      id: uuidv4(),
      title,
      completed: false,
    };
    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      setTodoTitle('');
      setTodoList((oldTodoList) => [newTodo, ...oldTodoList]);
    } catch {
      alert('Something wrong. Try again.');
      setTodoTitle('');
      throw new Error();
    }
  };

  return (
    <>
      <Search
        placeholder="Input todo title"
        enterButton="Add Todo"
        size="large"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
        onSearch={createTodo}
      />
    </>
  );
};

export default AddTodo;
