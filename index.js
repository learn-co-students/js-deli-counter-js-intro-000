function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(newPerson) {
  if(newPerson.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${newPerson.shift()}.`

};

function currentLine(array) {
var namesAndNumbers = [];

  if(array.length === 0) {
    return "The line is currently empty."
  }
  for(var i = 0; i < array.length; i++)

  namesAndNumbers.push(`${i + 1}.` + " " + `${array[i]}`)

return `The line is currently: ${namesAndNumbers.join(', ')}`




}
