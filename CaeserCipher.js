function caesarCipher(str, num) {
  num = num % 26

  // We want all the letters to be the same
  let lowerCaseString = str.toLowerCase()

  // Create a reference for the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let newString = ""

  // find the current letter

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i]
    // if there is a space character and add it the the current letter
    if (currentLetter === " ") {
      newString += currentLetter
      continue
    }

    //  Located the current index
    let currentIndex = alphabet.indexOf(currentLetter)
    // index of out new letter on our alphabet array
    let newIndex = currentIndex + num
    // make sure that the index does go over 25 and loop the beginning instead
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = 26 + newIndex
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else newString += alphabet[newIndex]
  }

  console.log(newString)
}
caesarCipher("Javascript", -900)
