import React from "react";
import CreateNote from "./CreateNote";
import NotesSection from "./NotesSection";

function Body({ data, titleValue, bodyValue, onTitleChange, onBodyChange, onHandleSubmit }) {
    return (
        <body>
            <CreateNote titleValue={titleValue} bodyValue={bodyValue} onTitleChange={onTitleChange} onBodyChange={onBodyChange} onHandleSubmit={onHandleSubmit}/>
            <NotesSection title="Catatan Saya" data={data}/>
            <NotesSection title="Arsip Catatan" data={data}/>
        </body>
    );
}

export default Body;