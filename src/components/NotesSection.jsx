import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesSection({ title, data, onDeleteNote, onEmptyCheck, onArchiveNote, onSearch, onEmptySearch }) {
  return (
    <div className="notes-section">
      <h2>{ title }</h2>
      <div className="notes-section__body">
        {onEmptyCheck() ? <p className="notes-section__empty-message">Tidak ada catatan</p> : data.map((data) => (
          <NotesSectionContent id={ data.id } data={ data } onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote}/>
        ))}
      </div>
    </div>
  );
}

export default NotesSection;
