import {React,useState} from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';

const NoteAddBtn = () => {
    const [editorView, setEditorView] = useState(false);

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const [editorContent, setEditorContent] = useState(
        {
        id: Date.now(),
        title: today.toDateString(),
        content:""
    });


    function addNewHandler(content){
        window.API.addNoteEntry(content)
    }
 
    return (
        <div>
            {editorView ? 
            <NoteEditor 
            setEditorView={setEditorView} 
            setEditorContent={setEditorContent}
            editorContent={editorContent} 
            saveHandler={addNewHandler}
            ></NoteEditor>
            : <button onClick={()=>{
                setEditorContent(    {
                    id: Date.now(),
                    title: today.toDateString(),
                    content:""
                })
                setEditorView(true)}}>add note</button>}
        </div>
    );
}

export default NoteAddBtn;
