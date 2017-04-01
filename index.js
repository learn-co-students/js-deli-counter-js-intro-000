//hhii
var katzDeli = []

function takeANumber(arr,person){
  arr.push(person)
  return `Welcome, ${person}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  var servPer
  if(arr.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    servPer = arr.shift()
    return `Currently serving ${servPer}.`
  }
}

function currentLine(arr){
  var newArr = "The line is currently:"
    if(arr.length === 0){
    return "The line is currently empty."
  }
  else{
    for (var i=0 ; i<arr.length ; i++){
      newArr = `${newArr} ${i+1}. ${arr[i]}`
      if(i<arr.length - 1)
      {
        newArr = `${newArr},`
      }
    }
    return newArr
  }
}