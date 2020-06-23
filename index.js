function takeANumber(array, name){

  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(currentline){
  if(currentline.length < 1) return "There is nobody waiting to be served!"
  else{
    var result = currentline.slice(0,1)
    currentline.shift()

    return `Currently serving ${result}.`

  }
}
function currentLine(currentline){
if(currentline.length < 1) return "The line is currently empty."
else{
  var suffix = "The line is currently:"
  var result = ""
  for(let i = 0; i < currentline.length; i++){
      if(i === currentline.length - 1 ){
        result = result +` ${i+1}. ${currentline[i]}`
      }
     else  result = result +` ${i+1}. ${currentline[i]},`
  }

 return suffix + result
}
}
