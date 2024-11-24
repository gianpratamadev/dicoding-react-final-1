import React from "react";
import { TextInput, LongTextInput } from "./TextInput";
import Button from "./Button";

function CreateNote({ titleMaxLength, titleValue, bodyValue, onTitleChange, onBodyChange, onHandleSubmit }) {
  return (
    <form className="create-note" onSubmit={onHandleSubmit}>
      <h2>Buat Catatan</h2>
      <p>Sisa karakter: {titleMaxLength}</p>
      <TextInput value={titleValue} onChange={ onTitleChange } onHandleSubmit={onHandleSubmit}>Ini adalah judul...</TextInput>
      <LongTextInput value={bodyValue} onChange={ onBodyChange } onHandleSubmit={onHandleSubmit}>Tuliskan catatanmu disini...</LongTextInput>
      <Button type="submit">Buat</Button>
    </form>
  );
}   

export default CreateNote;