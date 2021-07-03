katzDeli = [];
//otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(array){
  if (!array.length){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(line){
  if (!line.length){
    return "The line is currently empty."
  }
  else {
    let newLine = [];
    for (let i=0; i<line.length; i++){
      newLine.push(`${i+1}. ${line[i]}`)
    }
  return `The line is currently: ` + newLine.join(", ");
  }
}
