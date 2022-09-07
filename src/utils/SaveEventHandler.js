export function saveNew(saveData){
    console.log("save new called");

    
    window.API.addNoteEntry(saveData)
    
}
export function saveEdit(){}

// export  {saveNew, saveEdit}