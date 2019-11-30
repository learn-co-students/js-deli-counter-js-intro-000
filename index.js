function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  return arr.length === 0 ? `There is nobody waiting to be served!` : `Currently serving ${arr.shift()}.`
}

function currentLine(line){
  var customers = []
  for(var i=0; i < line.length; i++){
    i === 0 ? customers.push(`${i+1}. ${line[i]}`) : customers.push(` ${i+1}. ${line[i]}`)
  }
  return line.length === 0 ? `The line is currently empty.` : `The line is currently: ${customers}`
}
