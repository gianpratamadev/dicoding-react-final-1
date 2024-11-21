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
    this.onEmptyCheck = this.onEmptyCheck.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onEmptySearch = this.onEmptySearch.bind(this);
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

  onDeleteNote = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((note) => note.id !== id),
    }));
  };

  onEmptyCheck = () => {
    const isEmpty = this.state.data.length === 0;
    if (isEmpty) {
      return <p className="notes-section__empty-message">Tidak ada catatan</p>;
    }
  };

  onSearch = (event) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase())),
    }));
  };

  onEmptySearch = () => {
    this.setState((prevState) => ({
      data: prevState.data,
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
        <PageHeader onSearch={this.onSearch} onEmptySearch={this.onEmptySearch} />
        <Body
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onHandleSubmit={this.onHandleSubmit}
          onDeleteNote={this.onDeleteNote}
          onEmptyCheck={this.onEmptyCheck}
          onArchiveNote={this.onArchiveNote}
        />
      </>
    );
  }
}

export default App;
