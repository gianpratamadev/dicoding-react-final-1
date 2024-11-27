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
      titleMaxLength: 50,
      searchValue: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onTitleChange = (event) => {
    const newTitle = event.target.value;

    if (newTitle.length <= 50) {
      this.setState({
        title: newTitle,
        titleMaxLength: 50 - newTitle.length,
        searchValue: "",
      });
    }
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
      data: [newNote, ...event.data],
      title: "",
      body: "",
    }));

    event.target.reset();
    this.setState({ titleMaxLength: 50 });
  };

  onDeleteNote = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((note) => note.id !== id),
    }));
  };

  onArchiveNote = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };

  onSearchChange = (event) => {
    const searchValue = event.target.value;

    this.setState({ searchValue: searchValue });
  };

  render() {
    return (
      <>
        <PageHeader searchValue={this.state.searchValue} onSearchChange={this.onSearchChange}/>
        <Body
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onHandleSubmit={this.onHandleSubmit}
          onDeleteNote={this.onDeleteNote}
          onArchiveNote={this.onArchiveNote}
          titleMaxLength={this.state.titleMaxLength}
          searchValue={this.state.searchValue}
          onSearchChange={this.onSearchChange}
        />
      </>
    );
  }
}

export default App;
