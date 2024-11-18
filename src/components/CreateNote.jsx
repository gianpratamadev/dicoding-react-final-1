import React from "react";
import { TextInput, LongTextInput } from "./TextInput";
import Button from "./Button";

function CreateNote() {
  return (
    <div className="create-note">
      <h3>Buat Catatan</h3>
      <p>Sisa karakter: 50</p>
      <TextInput>Ini adalah judul...</TextInput>
      <LongTextInput>Tuliskan catatanmu disini...</LongTextInput>
      <Button>Buat</Button>
    </div>
  );
}   

export default CreateNote;