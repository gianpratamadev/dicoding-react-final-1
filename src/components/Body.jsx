import React from "react";
import CreateNote from "./CreateNote";
import NotesSection from "./NotesSection";
import ArchiveSection from "./ArchiveSection";

function Body({
  data,
  titleValue,
  bodyValue,
  onTitleChange,
  onBodyChange,
  onHandleSubmit,
  onDeleteNote,
  onArchiveNote,
  titleMaxLength,
  searchValue,
  onSearchChange,
}) {
  return (
    <body>
      <CreateNote
        titleValue={titleValue}
        bodyValue={bodyValue}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onHandleSubmit={onHandleSubmit}
        titleMaxLength={titleMaxLength}
      />
      <NotesSection
        title="Catatan Saya"
        data={data.filter((note) => note.archived === false)}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
      />
      <ArchiveSection
        title="Arsip Catatan"
        data={data.filter((note) => note.archived === true)}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      />
    </body>
  );
}

export default Body;
