var katzDeliLine = [];
function takeANumber (currentLine, personsName){
  currentLine.push(personsName)
for (var i = 0; i < currentLine.length; i ++){
  if (personsName === currentLine[i]){
    return `Welcome, ${currentLine[i]}. You are number ${i+1} in line.`
  }
}
}


function nowServing (arr){
  var nextInLine = arr.shift()
  if (arr.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${nextInLine}.`
  }
}


var currentLine = function (arr){
   var newArr = [];
  for (var i = 0; i < arr.length; i ++){
    newArr.push(` ${i+1}. ${arr[i]}`)
    var string = "The line is currently:" + newArr
  }
  if (arr.length === 0){
    return "The line is currently empty."
  } else {
  return string
  }
}
