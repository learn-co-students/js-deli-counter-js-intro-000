let katzDeliLine = []

function takeANumber(array, custName) {
  array.push(custName)
  let i = array.indexOf(custName)
  return `Welcome, ${custName}. You are number ${i+1} in line.`
}

function nowServing(array) {
  return array.length > 0 ? `Currently serving ${array.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(array) {
  let resStr = []
  for (var i = 0; i < array.length; i++) {
    resStr.push(` ${i+1}. ` + array[i])
  }


  return array.length > 0 ? 'The line is currently:' + resStr.join(',') : "The line is currently empty."
}
