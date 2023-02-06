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
const words = expr.split("**********");
let decoded = "";
for (const word of words) {
let letters = word.match(/.{10}/g);
for (const letter of letters) {
let decodedLetter = "";
if (letter === "0000000000") {
decodedLetter = " ";
} else {
decodedLetter = MORSE_TABLE[letter.replace(/0/g, ".").replace(/1/g, "-")];
}
decoded += decodedLetter;
}
decoded += " ";
}
return decoded.trim();
}

export default {
decode
};
