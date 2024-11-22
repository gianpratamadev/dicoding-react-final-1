import React from "react";
import CreateNote from "./CreateNote";
import NotesSection from "./NotesSection";

function Body({
  data,
  titleValue,
  bodyValue,
  onTitleChange,
  onBodyChange,
  onHandleSubmit,
  onDeleteNote,
  onArchiveNote,
}) {
  return (
    <body>
      <CreateNote
        titleValue={titleValue}
        bodyValue={bodyValue}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onHandleSubmit={onHandleSubmit}
      />
      <NotesSection
        title="Catatan Saya"
        data={data.filter((note) => note.archived === false)}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      />
      <NotesSection
        title="Arsip Catatan"
        data={data.filter((note) => note.archived === true)}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      />
    </body>
  );
}

export default Body;
