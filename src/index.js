function decodeMorse(morseCode) {
  const morseAlphabet = {
    '0000001011': 'A',
    '0011101010': 'B',
    '0011101110': 'C',
    '0000111010': 'D',
    '0000000010': 'E',
    '0010101110': 'F',
    '0000111110': 'G',
    '0010101010': 'H',
    '0000001010': 'I',
    '0010111111': 'J',
    '0000111011': 'K',
    '0010111010': 'L',
    '0000001111': 'M',
    '0000001110': 'N',
    '0000111111': 'O',
    '0010111110': 'P',
    '0011110111': 'Q',
    '0000101110': 'R',
    '0000101010': 'S',
    '0000000011': 'T',
    '0000101011': 'U',
    '0010101011': 'V',
    '0000101111': 'W',
    '0011101011': 'X',
    '0011101111': 'Y',
    '0011111010': 'Z'
  };
  
  const words = morseCode.split('**********');
  const decodedWords = words.map((word) => {
    const letters = word.match(/.{10}/g);
    const decodedLetters = letters.map((letter) => morseAlphabet[letter]);
    return decodedLetters.join('');
  });

  return decodedWords.join(' ');
}
