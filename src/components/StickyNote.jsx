import React from "react";

function StickyNote() {
  return (
    <div className="sticky-note">
      <h3>Babel</h3>
      <p>Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
      <p>02-09-2024</p>
      <p>02-09-2024</p>
    </div>
  );
}

export default StickyNote;

/*{
  id: number | string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string,
}

{
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
*/
