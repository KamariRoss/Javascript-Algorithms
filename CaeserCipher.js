function caesarCipher(str, num) {
  num = num % 26

  // We want all the letters to be the same
  const lowerCaseString = str.toLowerCase()

  // Create a reference for the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const newString = ""

  for (const i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i]
    if (currentLetter === " ") {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    const newIndex = currentIndex + num
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = 26 + newIndex
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else newString += alphabet[newIndex]
  }

  return newString
}
caesarCipher("Zoo Keeper", 2)
