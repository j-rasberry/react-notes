import {React, useRef, useState ,useEffect} from 'react';

import './entry.css'



const NoteEntry = ({setEditorView, editorContent, setEditorContent ,forceRender, setForceRender}) => {
    const [entires, setEntires] = useState([]);
    let oldEntires = useRef([]);


useEffect(() => {
    console.log("effect calleed");
    
    window.API.loadUserData().then((res)=>{
 

        
        if(res === JSON.stringify(oldEntires.current)){
            console.log("they are the");
            
        }else{
             
                
            setEntires(JSON.parse(res))
            oldEntires.current = JSON.parse(res);

        }
      
     
    })
    

});

    return (
        <div>
           
            {entires.map((data,key)=>{
                return(
                    <div className='entry-wrapper'>
                         
                    <div className='entry' onClick={ async ()=>{
                console.log("edit button clicked");
                setEditorContent(await window.API.editNoteEntry(data.id))
                console.log({editorContent});
                
                setEditorView(true)

                
        }}>
                        <h1 className='entry-title'>{data.title}</h1>
                        <p className='entry-content'>{data.content}</p>
                    </div>
              
            <button className='entry-button-delete' onClick={()=>{
                window.API.deleteNoteEntry(data.id)
                setForceRender(!forceRender)
            }}></button>
            <p></p>
                        </div>
                )
            })}
           

        </div>
    );
}

export default NoteEntry;
