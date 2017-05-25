var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var message = "Welcome, " + name + ". You are number "+array.length+" in line."
  return message
}

function nowServing(array) {
  if (array.length == 0) {
    return 'There is nobody waiting to be served!'
  }

  var serving = array.shift()
  return "Currently serving "+serving+"."
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  }

  var message = 'The line is currently: '

  let i = 0
  while (i < array.length - 1) {
    message = message + (i + 1) + ". " + array[i] + ", "
    i++
  }

  message = message + (i + 1) + ". " + array[i]
  return message
}
