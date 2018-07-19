console.log('Starting app.');


const fs=require('fs');

const notes=require('./note.js');
const _=require('lodash');
const yargs=require('yargs')

var titleOptions={
        describe:'Title of note',
        demand:true,
        alias:'t'
    };

var bodyOptions={
    body:{
        describe:'Body of note',
        demand:true,
        alias:'b'        
    }
};

const argv=yargs
.command('add','Add a note',{
    title:titleOptions,
    body:bodyOptions
})
.command('list','List all notes')
.command('read','Reading a note',{
    title:titleOptions
         })
.command('remove','Removing a note',{
    title:titleOptions
})
.help()
.argv;

var command=argv._[0];



console.log('Command: ',command);
console.log('Yargs: ',argv);

if(command==='add'){
   var note=notes.addNote(argv.title,argv.body);
   if(note){
     console.log("Note added");
     notes.logNote(note);  
   }
    else{
        console.log("Note not added");
    }
}
else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`Printing: ${allNotes.length} notes.`);
    allNotes.forEach((note)=>notes.logNote(note));
}
else if(command==='read'){
    var note=notes.getNote(argv.title);
    if(note){
       console.log('Note found');
       notes.logNote(note);
       }
    else{
        console.log('Note not found');
    }
}
else if(command==='remove'){
   var notesRemoved=notes.removeNote(argv.title);
   console.log(notesRemoved?"Note was removed":"Note not found");
}
else{
     console.log('Command not recognized');    
}