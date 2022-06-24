import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <script src='https://kit.fontawesome.com/433667d0d8.js' crossOrigin='anonymous' />
        {/* <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a> */}
      </header>

      <Layout />
    </div>
  );
}

export default App;
