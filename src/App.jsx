import React from 'react';
import './styles/main.css';
import AppRouter from './AppRouter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
