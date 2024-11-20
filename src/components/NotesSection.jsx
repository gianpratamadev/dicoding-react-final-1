import React from "react";
import NotesSectionContent from "./NotesSectionContent";

function NotesContent({ title, data }) {
  return (
    <div className="my-notes">
      <h2>{ title }</h2>
      <div className="my-notes__body">
        {data.map((item) => (
          <NotesSectionContent id={item.id} data={item}/>
        ))}
      </div>
    </div>
  );
}

export default NotesContent;
