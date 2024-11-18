import React from "react";
import StickyNote from "./StickyNote";

function MyNotes() {
  return (
   <div className="my-notes">
   <h3>Catatan Saya</h3>
   <StickyNote />
   <StickyNote /> 
   <StickyNote /> 
   <StickyNote /> 
   <StickyNote /> 
   </div>
  );
}

export default MyNotes;