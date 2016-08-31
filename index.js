var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

//function currentLine(line) {
// if line length is 0, return this
//  if (!line.length) {
  //  return "The line is currently empty."
//  }
// Create an empty array
//  const numbersAndName = []
// Let i = 0, l = length of array. while i is less than l, iterate
//  for (let i = 0, l = line.length; i < l; i++) {
// For each iteration, push i + 1 to return a number, and line[i] to return the item
//    numbersAndNames.push(`${i + 1}. ${line[i]}`)
//  }
// now return this
//  return `The line is currently: ${numbersAndNames.join(', ')}`
//};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
