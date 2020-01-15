/*fs = require('fs');
data = fs.readdirSync('c:/');
console.log('data:',data);
console.log("this comes  after");*/

fs = require('fs');
function phoneNumber(err,data){
    console.log('data:',data);
}
fs.readdir('c:/',phoneNumber);
console.log("this comes after");