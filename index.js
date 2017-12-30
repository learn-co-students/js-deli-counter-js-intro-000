function takeANumber(array,person){
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`
}
function nowServing(array){
  if (array.length == 0){
    return "There is nobody waiting to be served!"
  } else{
    var newbie = array[0]
    array.splice(0,1)
    return `Currently serving ${newbie}.`
  }
}
function currentLine(array){
  if (array.length ==0){
    return "The line is currently empty."
  } else {
    var string = `The line is currently: `
    for (let i = 0; i<array.length;i++){
      if (i === array.length-1){
        string = string + `${i+1}. ${array[i]}`
      }else {
        string = string + `${i+1}. ${array[i]}, `
    }
    }
  }
  return string
}
