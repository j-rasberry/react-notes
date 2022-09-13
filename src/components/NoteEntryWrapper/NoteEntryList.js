import {React,useState} from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteEntries from './NoteEntry';

const NoteEntryList = () => {
    const [editorView, setEditorView] = useState(false);
    const [editorContent, setEditorContent] = useState({
        id:"",
        title:"",
        content:""
    });
    function saveEditHandler(content){
        window.API.saveEditNoteEntry(content)

        
    }
    return (
        <div>
            <NoteEntries 
            editorView={editorView}
             setEditorView={setEditorView} 
             editorContent={editorContent} 
             setEditorContent={setEditorContent}
              ></NoteEntries>
            {editorView ? 
            <NoteEditor 
            editorContent={editorContent}
             setEditorView={setEditorView} 
             setEditorContent={setEditorContent} 
             saveHandler={saveEditHandler}
             ></NoteEditor>
                :<></>}

        </div>
    );
}

export default NoteEntryList;
