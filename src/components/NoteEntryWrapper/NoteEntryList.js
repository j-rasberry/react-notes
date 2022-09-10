import {React,useState} from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteEntries from './NoteEntry';
// import { saveNew, saveEdit } from '../../utils/SaveEventHandler';

const NoteEntryList = () => {
    const [editorView, setEditorView] = useState(false);
    const [editorContent, setEditorContent] = useState({
        id:"",
        title:"",
        content:""
    });
    function saveEditHandler(data){
        console.log(`after edit data to save: ${data}`);
        
    }
    return (
        <div>
            <NoteEntries editorView={editorView} setEditorView={setEditorView} editorContent={editorContent} setEditorContent={setEditorContent} ></NoteEntries>
            {editorView ? 
            <NoteEditor editorContent={editorContent} setEditorView={setEditorView} setEditorContent={setEditorContent} saveHandler={saveEditHandler}></NoteEditor>
                :<></>}

        </div>
    );
}

export default NoteEntryList;
