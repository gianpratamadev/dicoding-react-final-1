import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import Body from './components/Body';
import './style/style.css';
import data from './utils/data';

function App() {
  return (
    <>
    <Header />
    <Body data={data} />
    </>
  );
}

export default App;
