import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import Body from './components/Body';
import './style/style.css';
import data from './utils/data';

function App() {
  return (
    <>
    <PageHeader />
    <Body data={data} />
    </>
  );
}

export default App;
