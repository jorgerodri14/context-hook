import React from 'react';
import CountDisplay from './CountDisplay';
import Counter from './Counter';
import { CountProvider } from './count-context';

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
