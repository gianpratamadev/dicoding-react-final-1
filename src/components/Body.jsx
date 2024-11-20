import React from "react";
import CreateNote from "./CreateNote";
import NotesSection from "./NotesSection";

function Body({ data }) {
    return (
        <body>
            <CreateNote />
            <NotesSection title="Catatan Saya" data={data}/>
            <NotesSection title="Arsip Catatan" data={data}/>
        </body>
    );
}

export default Body;