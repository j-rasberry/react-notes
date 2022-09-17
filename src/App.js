import { React,useState } from "react";
import NoteAddBtn from "./components/NoteAdd/NoteAddBtn";
import NoteEntryList from "./components/NoteEntryWrapper/NoteEntryList";

function App() {
  const [forceRender, setForceRender] = useState(false);

  return (
    <div>
    
        <NoteAddBtn       forceRender={forceRender}
             setForceRender={setForceRender}></NoteAddBtn>
        <NoteEntryList      forceRender={forceRender}
             setForceRender={setForceRender} ></NoteEntryList>
        {/* <script src="./renderer.js"></script> */}

    </div>
  );
}

export default App;
