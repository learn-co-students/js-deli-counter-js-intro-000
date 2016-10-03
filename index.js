function takeANumber(array, name){
  array.push(name)
  var i = array.indexOf(name)
  return `Welcome, ${name}. You are number ${i + 1} in line.`
}

function nowServing(array){
  if (array.length > 0){
    array = array.shift()
    return `Currently serving ${array}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var list = "The line is currently: "
  if (line.length > 0){
    for(var i = 0; i < line.length; ++i)
      {list = list + `${i+1}. ${line[i]}, `}
     list = list.slice(0, -2);
     return list
  }else{
    return "The line is currently empty."
  }
}
