let vowelsAndConsonants = string => {
  let vowels = ['a', 'o', 'i', 'e', 'u'];
  for (const letter of string) {
    if (vowels.includes(letter)) {
      console.log(`${letter}`);
    }
  }
  for (const letter of string) {
    if (!vowels.includes(letter)) {
      console.log(`${letter}`);
    }
  }
};

vowelsAndConsonants('javascriptloops');
