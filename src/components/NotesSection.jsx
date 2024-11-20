import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesSection({ title, data }) {
  return (
    <div className="notes-section">
      <h2>{ title }</h2>
      <div className="notes-section__body">
        {data.map((item) => (
          <NotesSectionContent id={ item.id } data={ item}/>
        ))}
      </div>
    </div>
  );
}

export default NotesSection;
