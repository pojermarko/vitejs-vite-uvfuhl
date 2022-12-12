import { css } from '@emotion/css';
import { useState } from 'react';
import Counter from './components/Counter/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
