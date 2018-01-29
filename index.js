function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ` + array.length + " in line."
}

function nowServing(array) {
  if (array.length > 0) {
    var serving = array[0]
    array.shift()
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length > 0) {
    var arrayString = ''
    for (var i = 0; i < array.length; i++) {
      arrayString = arrayString + `${i + 1}. ${array[i]}`
      if (i < array.length - 1) {
        arrayString = arrayString + ', '
      }
    }
    return `The line is currently: ${arrayString}`
  } else {
    return "The line is currently empty."
  }
}
