const fs = require('fs');
const path = require('path');
const _ = require('lodash');


const userDataCheck = ()=>{
    if(!fs.existsSync(path.join(__dirname,'./../../src/data/notes.json'))){
        fs.writeFile(path.join(__dirname,'./../../src/data/notes.json'),"[]", (res)=>{
            console.log(res);
            
        });
    }else{
        // loadUserData();
    }

    console.log("checked data");
    
}

const addEntry =  (data)=>{

    let oldData = fs.readFileSync(path.join(__dirname,'./../../src/data/notes.json'),'utf8')
    data = JSON.parse(data)
    let entires = JSON.parse(oldData)
    entires.push(data);
    oldData = JSON.stringify(entires);

    fs.writeFileSync(path.join(__dirname,'./../../src/data/notes.json'), oldData, 'utf-8')

}
const editEntry = (id)=>{
    let noteID , noteTitle ,noteContent ;
 let noteEditInformation = {
    id : noteID,
    title : noteTitle,
    content : noteContent,
 }
    console.log("editEntry Called");
    
    let oldData = fs.readFileSync(path.join(__dirname,'./../../src/data/notes.json'),'utf8')
    console.log(`oldData: ${oldData}`);
    console.log(`id ${id}`);
    
    oldData = JSON.parse(oldData)

     let editData = _.find(oldData, {'id': id});
    
      console.log(`Note Edit info: ${JSON.stringify(editData)}`);
      
      return editData;
     
      

}
const deleteEntry = (id)=>{
    console.log("editEntry Called");
    
    let oldData = fs.readFileSync(path.join(__dirname,'./../../src/data/notes.json'),'utf8')
    console.log(oldData);
    oldData = JSON.parse(oldData)
    Object.keys(oldData).forEach(function(key){
        if (oldData[key] === id) {
            console.log(oldData[key]);
            // Deletes the id , title and, content
          delete oldData[key];
          delete oldData[key + 1];
          delete oldData[key + 2];
        }
      });
      console.log(JSON.stringify(oldData));

      fs.writeFileSync(path.join(__dirname,'./../../src/data/notes.json'), JSON.stringify(oldData), 'utf-8')

}



exports.checkUserData = userDataCheck;
exports.addEntry = addEntry;
exports.editEntry = editEntry;
exports.deleteEntry = deleteEntry;
