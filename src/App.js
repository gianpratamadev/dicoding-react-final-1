import React from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import Body from "./components/Body";
import "./style/style.css";
import { getInitialData } from "./utils/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onBodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState((event) => ({
      data: [...event.data, newNote],
      title: "",
      body: "",
    }));
  };

  render() {
    return (
      <>
        <PageHeader />
        <Body
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onHandleSubmit={this.onHandleSubmit}
        />
      </>
    );
  }
}

export default App;
