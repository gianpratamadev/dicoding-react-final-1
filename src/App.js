import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import Body from './components/Body';
import './style/style.css';
import data from './utils/data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data()
    }
  }

  render() {
    return (
    <>
    <PageHeader />
    <Body data={this.state.data} />
    </>
  );
  }
}

export default App;
