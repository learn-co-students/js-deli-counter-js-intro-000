function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function currentLine(line) {
const numbersAndNames = []
  if (!line.length) {
    return "The line is currently empty."
  }
  for (let i = 0; i < line.length; i++) {
      numbersAndNames.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`
  };






function nowServing(katzDeli) {

  if (!katzDeli.length){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeli.shift()}.`

}
