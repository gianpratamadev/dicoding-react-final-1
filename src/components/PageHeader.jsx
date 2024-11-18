import React from "react";
import TextInput from "./TextInput";

function PageHeader() {
  return (
    <header>
      <h1>Notes</h1>
      <TextInput placeholder="Cari catatan..." />
      <hr />
    </header>
  );
}

export default PageHeader;
