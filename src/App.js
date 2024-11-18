import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import StickyNote from './components/StickyNote';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <>
    <Header />
    <CreateNote />
    <StickyNote />
    <StickyNote />
    <StickyNote />
    <StickyNote />
    <StickyNote />
    </>
  );
}

export default App;
