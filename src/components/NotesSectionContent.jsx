import React from "react";

function NotesSectionContent({ data }) {
  return (
    <div className="sticky-note">
      <div className="sticky-note__content">
      <h3>{data.title}</h3>
      <p className="sticky-note__date">{data.date}</p>
      <p className="sticky-note__body">{data.body}</p>
      </div> 
      <div className="sticky-note__button">
        <a href="#" className="sticky-note__button_delete">Delete</a>
        <a href="#" className="sticky-note__button_archive">Archive</a>
      </div>
    </div>
  );
}

export default NotesSectionContent;