import React from "react";
import { TextInput, LongTextInput } from "./TextInput";
import Button from "./Button";

function CreateNote({ titleValue, bodyValue, onTitleChange, onBodyChange, onHandleSubmit }) {
  return (
    <form className="create-note" onSubmit={onHandleSubmit}>
      <h2>Buat Catatan</h2>
      <p>Sisa karakter: 50</p>
      <TextInput value={titleValue} onChange={onTitleChange}>Ini adalah judul...</TextInput>
      <LongTextInput value={bodyValue} onChange={ onBodyChange }>Tuliskan catatanmu disini...</LongTextInput>
      <Button type="submit">Buat</Button>
    </form>
  );
}   

export default CreateNote;