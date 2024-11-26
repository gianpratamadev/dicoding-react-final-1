import React from "react";
import TextInput from "./TextInput";

function PageHeader({ searchValue, onSearchChange }) {
  return (
    <header>
      <h1>Notes</h1>
      <TextInput value={searchValue} onChange={onSearchChange}>Cari catatan...</TextInput>
    </header>
  );
}

export default PageHeader;
