function isPalindrome(string) {
  // Make sure all letters come in the same
  string = string.toLowerCase()

  // Split the letters into an array to examine each letter
  const charactersArr = string.split("")

  //   Find the characters we want to use
  const validCharacters = "abscdefghijklmonpqurstuvwxyz".split("")

  //take out every character we do not want in the the array
  let lettersArr = []
  charactersArr.forEach((char) => {
    //   if the letter is a the index would be 0 if k it would be 11.
    // The -1 comes when there is no similiar character in the array like , or "" or .
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })
  if (lettersArr.join("") === lettersArr.reverse().join("")) return true
  else return false
}

// const string = process.argv[2]

// false
// console.log(isPalindrome("Coding Javascript"))

// true
console.log(isPalindrome("Coding"))
