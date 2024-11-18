import React from "react";
import TextInput from "./TextInput";

function PageHeader() {
  return (
    <header>
      <h1>Notes</h1>
      <TextInput>Cari catatan...</TextInput>
      <hr />
    </header>
  );
}

export default PageHeader;
