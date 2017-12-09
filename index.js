function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var l = katzDeliLine.length
  return `Welcome, ${name}. You are number ${l} in line.`
}

function nowServing(deliLine){
  if(deliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  var name = deliLine.shift()
  return `Currently serving ${name}.`
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  var str = "The line is currently:"
  for(var i = 0; i < line.length; ++i){
    if(i < line.length - 1){
    str =  str.concat(` ${i + 1}. ${line[i]},`)
  }else{
    str = str.concat(` ${i + 1}. ${line[i]}`)
  }
  }
  return str
}
