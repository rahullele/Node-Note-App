console.log('Starting notes.js');

const fs=require('fs');

var fetchNote=()=>{
    
    try{
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
    }catch(e){
     return [];   
    }
    
}

var saveNote=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote=(title,body)=>{
    var note={
        title,
        body
    }
    var notes=fetchNote();
    
    var duplicateNotes=notes.filter((note) => note.title===title);
    
    if(duplicateNotes.length===0){
    notes.push(note);
    saveNote(notes);
    return note;
    }
    
    
};

var getAll=()=>{
    return fetchNote();
};

var getNote=(title)=>{
    var notes=fetchNote();
    var filteredNotes=notes.filter((note)=>note.title===title);
    return filteredNotes[0];
};

var removeNote=(title)=>{
    var notes=fetchNote();
    var filteredNotes=notes.filter((note) => note.title!==title);
    saveNote(filteredNotes);
    return notes.length!=filteredNotes.length;
};

var logNote=(note)=>{
        debugger;
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
};


module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}

//addNote:addNote and just addNote is same because of ES6 syntax