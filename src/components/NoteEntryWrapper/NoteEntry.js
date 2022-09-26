import {React, useRef, useState ,useEffect} from 'react';

import './entry.css'
import deleteIcon from './../../assets/delete.svg'



const NoteEntry = ({setEditorView, editorContent, setEditorContent ,forceRender, setForceRender}) => {
    const [entires, setEntires] = useState([]);
    let oldEntires = useRef([]);


useEffect(() => {
    
    window.API.loadUserData().then((res)=>{
 

        
        if(res === JSON.stringify(oldEntires.current)){
            
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
                setEditorContent(await window.API.editNoteEntry(data.id))
                
                setEditorView(true)

                
        }}>
                        <h1 className='entry-title'>{data.title}</h1>
                        <p className='entry-content'>{data.content}</p>
                    </div>
                    <img src={deleteIcon}alt='delete item'  className='entry-button-delete' onClick={()=>{
                window.API.deleteNoteEntry(data.id)
                setForceRender(!forceRender)
            }}></img>
       
            <p></p>
                        </div>
                )
            })}
           

        </div>
    );
}

export default NoteEntry;
