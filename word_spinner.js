function spinWords(string){
  let array = string.split(" ")
    newArr = array.map(item => item.length >= 5 ? item.split("").reverse().join("") : item)
  return newArr.join(" ")
}

spinWords("it is so wonderful and specific")