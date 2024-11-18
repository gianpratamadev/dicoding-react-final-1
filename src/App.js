import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import StickyNote from './components/StickyNote';
import CreateNote from './components/CreateNote';
import MyNotes from './components/MyNotes';
import './style/style.css';

function App() {
  return (
    <>
    <Header />
    <CreateNote />
    <MyNotes />
    </>
  );
}

export default App;
