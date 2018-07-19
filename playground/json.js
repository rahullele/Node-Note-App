const fs=require('fs');

var originalNote={
    title:'some title',
    body:'some body'
};

var originalNoteString=JSON.stringify(originalNote); //JSON.stringify converts object to JSON string
fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);//Converts JSON string to object

console.log(typeof note);
console.log(note.title);

