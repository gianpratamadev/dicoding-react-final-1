import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesSection({
  title,
  data,
  onDeleteNote,
  onArchiveNote,
  searchValue,
}) {
  
  const filteredNotes = searchValue 
    ? data.filter((note) => 
        note.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;

  return (
    <div className="notes-section">
      <h2>{title}</h2>
      <div className="notes-section__body">
        {filteredNotes.length === 0 ? (
          <p className="notes-section__empty-message">Tidak ada catatan</p>
        ) : (
          filteredNotes.map((data) => (
            <NotesSectionContent
              key={data.id}
              id={data.id}
              data={data}
              onDeleteNote={onDeleteNote}
              onArchiveNote={onArchiveNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NotesSection;
