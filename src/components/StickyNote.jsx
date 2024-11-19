import React from "react";
import Button from "./Button";
function StickyNote() {
  return (
    <div className="sticky-note">
      <div className="sticky-note__content">
      <h3>Babel</h3>
      <p className="sticky-note__date">Kamis, 02 April 2024</p>
      <p className="sticky-note__body">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
      </div> 
      <div className="sticky-note__button">
        <a href="#" className="sticky-note__button_delete">Delete</a>
        <a href="#" className="sticky-note__button_archive">Archive</a>
      </div>
    </div>
  );
}

export default StickyNote;