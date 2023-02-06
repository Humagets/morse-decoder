const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    };
    
    function decode(expr) {
    let result = "";
    let exprArray = expr.split("**********");
    for (let i = 0; i < exprArray.length; i++) {
    let current = exprArray[i];
    let morseCode = "";
    for (let j = 0; j < current.length; j+=2) {
    morseCode += current[j] === "0" ? "." : "-";
    }
    result += MORSE_TABLE[morseCode] ? MORSE_TABLE[morseCode] : " ";
    }
    return result;
    }
    
    module.exports = {
    decode
    }
