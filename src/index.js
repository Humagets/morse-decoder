const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split("**********");
    let decoded = "";
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].match(/.{10}/g);
        for (let j = 0; j < letters.length; j++) {
            let code = "";
            for (let k = 0; k < letters[j].length; k++) {
                code += letters[j][k] === "0" ? "." : "-";
            }
            decoded += MORSE_TABLE[code];
        }
        decoded += " ";
    }
    return decoded.trim();
}

console.log(decode("00000011110000000010**********0000001111")); // outputs "me"
