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
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
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
      data: [newNote, ...event.data ],
      title: "",
      body: "",
    }));
  };

  onDeleteNote = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((note) => note.id !== id),
    }));
  };

  onArchiveNote = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((note) => note.id === id ? { ...note, archived: !note.archived } : note),
    }));
  };

  render() {
    return (
      <>
        <PageHeader/>
        <Body
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onHandleSubmit={this.onHandleSubmit}
          onDeleteNote={this.onDeleteNote}
          onArchiveNote={this.onArchiveNote}
        />
      </>
    );
  }
}

export default App;
