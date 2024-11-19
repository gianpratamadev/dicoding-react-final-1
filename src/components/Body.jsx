import React from "react";
import CreateNote from "./CreateNote";
import MyNotes from "./MyNotes";

function Body({ data }) {
    return (
        <body>
            <CreateNote />
            <MyNotes data={data}/>
        </body>
    );
}

export default Body;