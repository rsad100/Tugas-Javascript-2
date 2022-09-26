const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope' 
]

function searchName(letter, outputArraylength, callback){
    outputArray = [];
    for ( var i = 0 ; i < name.length; i++ ){
        if (outputArray.length < outputArraylength){
                test(name[i],letter)
            }
    }
    return outputArray
}

function test(selectedname, letter) {
    if (selectedname.toLowerCase().includes(letter.toLowerCase())){
    outputArray.push(selectedname);
    }
}

console.log(searchName('an', 3, test));