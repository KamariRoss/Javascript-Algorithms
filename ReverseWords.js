function reverseWords(string) {
  let wordsArr = string.split(" ")
  let reversedWordsArr = []

  wordsArr.forEach((word) => {
    //   define empty string
    // revers the word and pus it to the new array
    let reverseWord = ""
    // loop through every letter in word backwards
    // Add it to empty string
    for (let index = word.length - 1; index >= 0; index--) {
      reverseWord += word[index]
    }
    reversedWordsArr.push(reverseWord)
  })
  console.log(reversedWordsArr.join(" "))
}
reverseWords("this is a string of words")
