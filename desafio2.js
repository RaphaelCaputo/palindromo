
function palindrome(str) {
    let re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    str = str.toLowerCase().replace('.', '');
    let result = [];
    let twoS = '';
    let threeS = '';
    let fourS = '';

    let arrayOfStrings = str.split(' ');

    console.log(arrayOfStrings);

    for(let i = 0; i < arrayOfStrings.length -1 ; i++) {
        twoS = arrayOfStrings[i] + arrayOfStrings[i+1];
        threeS = arrayOfStrings[i] + arrayOfStrings[i+1] + arrayOfStrings[i+2];
        fourS = arrayOfStrings[i] + arrayOfStrings[i+1] + arrayOfStrings[i+2] + arrayOfStrings[i+3];
        
        // console.log(i);
        // console.log(twoS);
        // console.log(threeS);

        if(fourS == fourS.split('').reverse().join(''))
            result.push(fourS);
        if(threeS == threeS.split('').reverse().join(''))
            result.push(threeS);
        if(twoS == twoS.split('').reverse().join(''))
            result.push(twoS);
        if(arrayOfStrings[i] == arrayOfStrings[i].split('').reverse().join(''))
            result.push(arrayOfStrings[i]);
        

    }
    console.log("Resposta: " + result);

}

palindrome("Hoje subi no onibus correndo.");