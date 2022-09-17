const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const dataPath = "./ElectronNotes/data/notes.json"


const checkUserData = async ()=>{

    
    
    if(!fs.existsSync(path.join(process.env.APPDATA,dataPath))){
        try {
            fs.mkdirSync(path.join(process.env.APPDATA,"/ElectronNotes/data"),{recursive:true})
            fs.writeFile(path.join(process.env.APPDATA,dataPath),"[]", (res)=>{
                console.log(res);
                
            });
        } catch (error) {
            console.log(error);
            
        }
     
    }else{
     return await  fs.readFileSync(path.join(process.env.APPDATA,dataPath),'utf8')
      
    }

    console.log("checked data");

    
}

const addEntry =  (data)=>{

    let oldData = fs.readFileSync(path.join(process.env.APPDATA,dataPath),'utf8')
    data = JSON.parse(data)
    let entires = JSON.parse(oldData)
    entires.push(data);
    oldData = JSON.stringify(entires);

    fs.writeFileSync(path.join(process.env.APPDATA,dataPath), oldData, 'utf-8')

}
const editEntry = (id)=>{
    let noteID , noteTitle ,noteContent ;
 let noteEditInformation = {
    id : noteID,
    title : noteTitle,
    content : noteContent,
 }
    console.log("editEntry Called");
    
    let oldData = fs.readFileSync(path.join(process.env.APPDATA,dataPath),'utf8')
    console.log(`oldData: ${oldData}`);
    console.log(`id ${id}`);
    
    oldData = JSON.parse(oldData)

     let editData = _.find(oldData, {'id': id});
    
      console.log(`Note Edit info: ${JSON.stringify(editData)}`);
      
      return editData;
     
      

}
const saveEdit = (content)=>{
    console.log("Save edit called");
    
content = JSON.parse(content);
let oldData = fs.readFileSync(path.join(process.env.APPDATA,dataPath),'utf8')
oldData = JSON.parse(oldData)
let objIndex = _.findIndex(oldData,{id:content.id})
oldData.splice(objIndex, 1, {id: content.id, title: content.title, content: content.content});

console.log();
fs.writeFileSync(path.join(process.env.APPDATA,dataPath), JSON.stringify(oldData), 'utf-8')


 
}
const deleteEntry = (id)=>{
    console.log("delete Called");
    
    let oldData = fs.readFileSync(path.join(process.env.APPDATA,dataPath),'utf8')
    oldData = JSON.parse(oldData);
    let data =  _.reject(oldData, {id:id})
    console.log(`data: ----- \n ${JSON.stringify(data) } \n ----`);
    

      fs.writeFileSync(path.join(process.env.APPDATA,dataPath), JSON.stringify(data), 'utf-8')

}



exports.checkUserData = checkUserData;
exports.addEntry = addEntry;
exports.editEntry = editEntry;
exports.deleteEntry = deleteEntry;
exports.saveEdit = saveEdit;
