console.log('Starting app.');
//Using built in modules

const fs=require('fs');
const os=require('os');
const note=require('./note.js');
const _=require('lodash');

var user=os.userInfo();
console.log(user);

/* o/p of console.log(user) in Terminal
{ uid: 501,
  gid: 20,
  username: 'rahul',
  homedir: '/Users/rahul',
  shell: '/bin/bash' }
*/

//general file append example
fs.appendFile('greetings.txt','Hello World!',function(err){
    if(err){
    console.log("Unable to append");
    }
})

//using string concat for username 
fs.appendFile('greetings.txt','Hello'+user.username,function(err){
    if(err){
    console.log("Unable to append");
    }
});

//using ES6 script template string
fs.appendFile('greetings.txt',`Hello ${user.username}!`,function(err){
    if(err){
    console.log("Unable to append");
    }
});

//Using you own modules
var result1=note.addNote();
console.log(result1);

var result2=note.add(9,-2);
console.log(result2);

//Using npm modules
//example 1
console.log(_.isString(true));
console.log(_.isString('with'));

//example 2
var filteredarray=_.uniq(['Andrew',1,'Andrew',1,2,3,4,5]);
console.log(filteredarray);
