function caesarCipher(str, num) {
  // shift every number in our given string
  // by the number that is passed in

  //   change all letters to lowercase
  const lowerCaseString = str.toLowerCase()

  // create alphabet for reference
  const alphabet = "abcdefghijklmnopqurstuvwxyz".split("")
  const newString = ""

  for (let i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i]
    if (currentLetter === " ") {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    const newIndex = currentIndex + num
  }
}
caesarCipher("zoo keeper", 2)
