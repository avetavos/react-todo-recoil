import React from 'react';
import Navbar from './components/navbar/Navbar';
import Todos from './components/todos/Todos';

import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Navbar />
      <Todos />
    </>
  );
}

export default App;
