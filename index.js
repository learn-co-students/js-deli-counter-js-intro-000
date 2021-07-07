function takeANumber(array,name){
  var position = array.length +1
  array.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}



function nowServing(array){
  if(array.length >0){
    var announcement = `Currently serving ${array[0]}.`;
    array.shift()
    return announcement
  }
  else{
  return "There is nobody waiting to be served!"
  }
}


function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty."
  }
  else if (array.length === 1){
    return `Currently serving ${array[0]}`
  }
  else{var line = "The line is currently: "
    for(let i=0; i<array.length; i++){
      line += `${i+1}. ${array[i]}, `
    }
    line = line.slice(0,-2)
  return line
}}
