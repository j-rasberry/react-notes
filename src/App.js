import { React } from "react";
import NoteAddBtn from "./components/NoteAdd/NoteAddBtn";
import NoteEntryList from "./components/NoteEntryWrapper/NoteEntryList";

function App() {

  return (
    <div>
    
        <NoteAddBtn></NoteAddBtn>
        <NoteEntryList ></NoteEntryList>
        {/* <script src="./renderer.js"></script> */}

    </div>
  );
}

export default App;
