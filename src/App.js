import React, { Suspense } from 'react';
import Home from './containers/home'
import './App.css';

function App() {
  return (
    <Suspense fallback="loading" className="App">
      <Home />
    </Suspense>
  );
}

export default App;
