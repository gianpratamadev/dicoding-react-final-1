import React from "react";
import TextInput from "./TextInput";

function PageHeader({ onSearch, onEmptySearch }) {
  return (
    <header>
      <h1>Notes</h1>
      <TextInput onChange={onSearch} onEmptySearch={onEmptySearch}>Cari catatan...</TextInput>
    </header>
  );
}

export default PageHeader;
