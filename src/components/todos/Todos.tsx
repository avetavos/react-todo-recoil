import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';
import { Row, Col } from 'antd';
// component
import AddTodo from './AddTodo';
import SummaryTodo from './SummaryTodo';
import ListTodo from './ListTodo';
// interface
import Todo from '../../interfaces/todo';
// store
import { todos as todoAtom } from '../../store';

const Todos = () => {
  const setTodo = useSetRecoilState<Todo[]>(todoAtom);

  useEffect(() => {
    (async () => {
      const { data }: { data: Todo[] } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodo(data);
    })();
  }, [setTodo]);

  return (
    <>
      <Row gutter={[0, 32]} style={{ marginTop: '32px' }}>
        <Col span={12} offset={6}>
          <h1>Todo Application With RecoilJS</h1>
          <hr />
        </Col>
        <Col span={12} offset={6}>
          <AddTodo />
        </Col>
        <Col span={12} offset={6}>
          <SummaryTodo />
        </Col>
        <Col span={18} offset={3}>
          <ListTodo />
        </Col>
      </Row>
    </>
  );
};

export default Todos;
