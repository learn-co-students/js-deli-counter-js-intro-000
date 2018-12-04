function takeANumber(people, newperson){

  var number = people.length
  people.push(newperson)
  return `Welcome, ${newperson}. You are number ${number+1} in line.`
}

function nowServing(people){

  if (people.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    var served = people.shift()
  return `Currently serving ${served}.`
}
}


function currentLine(people){

  var sentence = "The line is currently:"

  if (people.length === 0){
    return "The line is currently empty."
  }else{

  for (var i = 0 ; i < people.length ; i++){
    var person = people[i]
    sentence = sentence + ` ${i+1}. ${person},`
  }
}
return sentence.slice(0,sentence.length-1)
}
