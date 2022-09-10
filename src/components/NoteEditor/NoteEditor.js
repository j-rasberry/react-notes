import {React,useState} from 'react';
import './NoteAdd.css'

const NoteEditor = ({setEditorView,editorContent, saveHandler}) => {

    const [error, setError] = useState("");
    function contentValidation(){
   
        if(document.getElementById('title-input').value === ""){
            setError("Your note must have a title.")
        }else if(document.getElementById('content-input').value === ""){
            setError("Your going to need some content written down.")
        }else{
            return true;
        }
        
         return false;

    }
    return (
        <div className='note-add-window-wrapper'>
            
             <p className='error-text'>{error}</p>
            <input id='title-input' defaultValue={editorContent.title}></input>
            <textarea id='content-input' className='note-text-input' placeholder='note' defaultValue={editorContent.content}></textarea>
            <div> 
                <button onClick={()=>{
                    setEditorView(false)
                }}>cancel</button>
                <button onClick={()=>{
                    if(contentValidation()){

                        // TODO: create switch statement for editor data handling types
                        console.log("Before edit data :" + editorContent);
                         
                        saveHandler(JSON.stringify({ 
                            id: editorContent.id,
                           title: document.getElementById('title-input').value,
                           content: document.getElementById('content-input').value}))
                           setEditorView(false)
                    }
                }}>save</button>
            </div>
        

        </div>
    );
}
export default NoteEditor;
