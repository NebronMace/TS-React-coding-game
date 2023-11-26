
const atomicChars = new Set([
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "=",
    ","
]);

const whiteSpaceChars= new Set([
    "\n"
]);

const ignoredChars = new Set(["#"]);

function Split(input:string){
    let remainingInput = input;
    const outputArray = [];
    let currentWord = "";
    while(remainingInput.length > 0){
        if(atomicChars.has(remainingInput[0])){
            if(currentWord.length > 0){
                outputArray.push(currentWord);
            }
            outputArray.push(remainingInput[0]);
            remainingInput = remainingInput.slice(1);
            continue;
        }
        if(whiteSpaceChars.has(remainingInput[0])){
            if(currentWord.length > 0){
                outputArray.push(currentWord);
                currentWord = "";
            }
            remainingInput = remainingInput.slice(1);
            continue;
        }
        if(ignoredChars.has(remainingInput[0])){
            remainingInput = remainingInput.slice(1);
            continue;
        }
        
        currentWord = currentWord+remainingInput[0];
        remainingInput = remainingInput.slice(1);
    }
    return outputArray;

}

export default Split;