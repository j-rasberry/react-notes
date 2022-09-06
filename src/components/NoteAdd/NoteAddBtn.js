import React from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';


const NoteAddBtn = ({editorView, setEditorView}) => {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const editData = {
        id: Date.now(),
        title: today.toDateString(),
        content:""
    }
 
    return (
        <div>
            {editorView ? 
            <NoteEditor setEditorView={setEditorView} editData={editData}></NoteEditor>
            : <button onClick={()=>{setEditorView(true)}}> add note</button>}
        </div>
    );
}

export default NoteAddBtn;
