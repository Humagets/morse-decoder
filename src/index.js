function decode(expr) {
  const morseCodeDict = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
  };

  const words = expr.split('   ');
  const decodedWords = words.map((word) => {
    const letters = word.split(' ');
    const decodedLetters = letters.map((letter) => {
      for (const key in morseCodeDict) {
        if (morseCodeDict[key] === letter) {
          return key;
        }
      }
    });
    return decodedLetters.join('');
  });
  return decodedWords.join(' ');
}
