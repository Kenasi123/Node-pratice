
//Core module

//Local Module
//const listofName = require('./import');

//console.log(listofName); 

module.exports
 = 
    function sayZZZ (listofName) {
        Object.values(listofName).forEach(entry => {
            console.log(`${entry}zzz`);
        }); 
    
    }