import {React} from 'react';

import entires from './../../data/notes.json'


const NoteEntry = ({setEditorView, editorContent, setEditorContent}) => {

  

    return (
        <div>
            {entires.map((data,key)=>{
                return(
                    <div>
                         
                       
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        {/* <p>{eSuccess}</p> */}
               <button onClick={ async ()=>{
                console.log("edit button clicked");
                setEditorContent(await window.API.editNoteEntry(data.id))
                console.log({editorContent});
                
                setEditorView(true)

                
        }}
            
            >edit</button>
            <p></p>
                        </div>
                )
            })}
           

        </div>
    );
}

export default NoteEntry;
