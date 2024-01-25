function reverseWords(str) {
    const wordArray = str.split(' ').map(x => x.split('').reverse().join(''))
    return wordArray.join(' ')
  }