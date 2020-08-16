import React from 'react';
import { useRecoilValue } from 'recoil';
import { Row, Col } from 'antd';
// store
import { summaryTodo } from '../../store';

const SummaryTodo = () => {
  const {
    totalTodo,
    totalCompletedTodo,
    totalUncompletedTodo,
  } = useRecoilValue(summaryTodo);

  return (
    <>
      <Row>
        <Col className="text-center" span={8}>
          <b>Total Todos: {totalTodo}</b>
        </Col>
        <Col className="text-center" span={8}>
          <b>Completed Todos: {totalCompletedTodo}</b>
        </Col>
        <Col className="text-center" span={8}>
          <b>Incomplete Todos: {totalUncompletedTodo}</b>
        </Col>
      </Row>
    </>
  );
};

export default SummaryTodo;
