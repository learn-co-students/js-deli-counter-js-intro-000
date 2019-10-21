function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line == '') {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + `${line.shift()}.`
  }
}

function currentLine(line) {
  console.log(line)
  let nameAddedWithNumber = []
  for(let i = 0; i < line.length; i++){
    nameAddedWithNumber.push(`${i+1}. ${line[i]}`)
    console.log(nameAddedWithNumber)
  }
  if(line == ''){
  return "The line is currently empty."
  }else{
    console.log(nameAddedWithNumber)
    console.log(nameAddedWithNumber.join(", "))
    return "The line is currently: " +`${nameAddedWithNumber.join(", ")}`
  }
}
