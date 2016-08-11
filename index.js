var katzDeli = [];

function takeANumber (katzDeli, newName){
  katzDeli.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeli.length} in line.`;
}

function nowServing (katzDeli, newName) {
  if (katzDeli.length > 0){
      return `Currently serving ${katzDeli.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  }

}
function currentLine (katzDeli) {
  if (!katzDeli.length) {
    return `The line is currently empty.`
  }

  const numbersAndNames = []

  for (let i = 0, l = katzDeli.length; i < l; i++) {
    numbersAndNames.push(`${i+1}. ${katzDeli[i]}`)
}

return `The line is currently: ${numbersAndNames.join(', ')}`
}
