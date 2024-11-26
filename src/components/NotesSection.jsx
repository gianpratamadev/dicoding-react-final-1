import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesSection({
  title,
  data,
  onDeleteNote,
  onArchiveNote,
  searchValue,
}) {
  return (
    <div className="notes-section">
      <h2>{title}</h2>
      <div className="notes-section__body">
        {data.length != 0 ? (
          data.map((data) => (
            <NotesSectionContent
              id={data.id}
              data={data}
              onDeleteNote={onDeleteNote}
              onArchiveNote={onArchiveNote}
            />
          ))
        ) : searchValue !== "" ? (
          data
            .filter((data) => data.title.includes(searchValue))
            .map((data) => (
              <NotesSectionContent
                id={data.id}
                data={data}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))
        ) : (
          <p className="notes-section__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}

export default NotesSection;
