import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesContent({ title}) {
  return (
    <div className="my-notes">
      <h2>{ title }</h2>
      <div className="my-notes__body">
        <NotesSectionContent />
        <NotesSectionContent />
      </div>
    </div>
  );
}

export default NotesContent;
