import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Table, Button, Row, Col } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { getAllTodo, todos as atomTodo } from '../../store';

import Todo from '../../interfaces/todo';

const ListTodo = () => {
  const todos = useRecoilValue(getAllTodo);
  const setTodoList = useSetRecoilState<Todo[]>(atomTodo);

  const toggleTodo = async (todo: Todo) => {
    try {
      await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          completed: !todo.completed,
        }
      );
      const updatedTodo = { ...todo, completed: !todo.completed };
      const todoIndex = todos.map((item) => item.id).indexOf(todo.id);
      setTodoList([
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
      ]);
    } catch (err) {
      alert('Something wrong. Try again.');
      throw new Error();
    }
  };

  const removeTodo = async (id: string | number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const deletedTodos = todos.filter((item) => item.id !== id);
      setTodoList(deletedTodos);
    } catch (err) {
      alert('Something wrong. Try again.');
      throw new Error();
    }
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'count',
      render: (_: any, record: Todo, index: number) => {
        return index + 1;
      },
    },
    {
      title: 'Todo Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (record: boolean) => {
        return record ? (
          <>
            <CheckOutlined className="text-green" />
          </>
        ) : (
          <>
            <CloseOutlined className="text-red" />
          </>
        );
      },
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_: any, record: Todo) => {
        return (
          <div key={record.id}>
            <Row>
              <Col span={12}>
                <Button type="primary" onClick={() => toggleTodo(record)}>
                  Toggle
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  danger
                  onClick={() => removeTodo(record.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={todos}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default ListTodo;
