import { React, useState } from "react";
import NoteAddBtn from "./components/NoteAdd/NoteAddBtn";
import NoteEntryList from "./components/NoteEntryWrapper/NoteEntryList";

function App() {
  const [editorView, setEditorView] = useState(false);
  return (
    <div>
    
        <NoteAddBtn editorView={editorView} setEditorView={setEditorView}></NoteAddBtn>
        <NoteEntryList editorView={editorView} setEditorView={setEditorView}></NoteEntryList>
        {/* <script src="./renderer.js"></script> */}

    </div>
  );
}

export default App;
