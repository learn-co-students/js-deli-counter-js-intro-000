function takeANumber(people, name) {
    people.push (name)
    return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length > 0){
    let  name = katzDeliLine[0]
    katzDeliLine.shift()
    return (`Currently serving ${name}.`)
   }
   else if (katzDeliLine.length ===  0){
     return "There is nobody waiting to be served!"
   }
    return `Welcome, ${name[i]}. You are number ${people[i++]} in line.`
}

function currentLine(line){
  if (line.length === 0){
      return ("The line is currently empty.")
  }
  var queue = [];
  for (var i = 1; i <= line.length; i++){
      queue.push (`${i}. ${line[i-1]}`)
  }
  return (`The line is currently: ${queue.join(', ')}`)
}
