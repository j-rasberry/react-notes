import {React,useState} from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteEntries from './NoteEntry';

const NoteEntryList = ({forceRender,setForceRender}) => {
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
             forceRender={forceRender}
             setForceRender={setForceRender}
              ></NoteEntries>
            {editorView ? 
            <NoteEditor 
            editorContent={editorContent}
             setEditorView={setEditorView} 
             setEditorContent={setEditorContent} 
             saveHandler={saveEditHandler}
             forceRender={forceRender}
             setForceRender={setForceRender}


             ></NoteEditor>
                :<></>}

        </div>
    );
}

export default NoteEntryList;
