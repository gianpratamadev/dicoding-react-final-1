import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesSectionContent({ data, onDeleteNote, onArchiveNote }) {  
  return (
    <div className="notes-section-content">
      <div className="notes-section-content__content">
      <h3>{data.title}</h3>
      <p className="notes-section-content__date">{showFormattedDate(data.createdAt)}</p>
      <p className="notes-section-content__body">{data.body}</p>
      </div> 
      <div className="notes-section-content__button">
        <a href="#" className="notes-section-content__button_delete" onClick={() => onDeleteNote(data.id)}>Delete</a>
        <a href="#" className="notes-section-content__button_archive" onClick={() => onArchiveNote(data.id)}>{data.archived ? "Return" : "Archive"}</a>
      </div>
    </div>
  );
}

export default NotesSectionContent;