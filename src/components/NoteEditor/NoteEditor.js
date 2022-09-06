import {React,useState} from 'react';
import './NoteAdd.css'

const NoteEditor = ({editorView, setEditorView, setEditorContent, editorContent}) => {

    function handleSave(){

        const saveData = {
            id: Date.now(),
            title: document.getElementById('title-input').value,
            content: document.getElementById('content-input').value
        }
        
        window.API.addNoteEntry(saveData)
    }
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
                    setEditorContent({
                        id:"",
                        title:"",
                        content:""
                    })
                }}>cancel</button>
                <button onClick={()=>{
                    if(contentValidation()){
                        handleSave()
                    }
                    
                    
                    setEditorView(false)
                }}>save</button>
            </div>
        

        </div>
    );
}
export default NoteEditor;
