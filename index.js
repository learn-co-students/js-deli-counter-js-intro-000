var katzDeliLine = []

function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function currentLine(array){
  if(!array.length)
  return `The line is currently empty.`
  const numbersAndNames = []

  for (let i = 0, l = array.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${array[i]}`)
  }

return `The line is currently: ${numbersAndNames.join(', ')}`
}

function nowServing(array){
  if(!array.length)
  return `There is nobody waiting to be served!`
  return `Currently serving ${array.shift()}.`
}
