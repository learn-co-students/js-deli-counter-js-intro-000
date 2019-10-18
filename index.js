function takeANumber(arr, name){
  arr.push(name)
  var turn = arr.length
  return `Welcome, ${name}. You are number ${turn} in line.`
}
function currentLine(arr){
  var message = "The line is currently: "
  var stop = arr.length;
  if (stop > 0) {
    for(var i=0; i<stop; i++){
        message += `${i+1}. ${arr[i]}`
        if (i<stop-1) {
          message+=", "
        }
    }
  }else{
    message = "The line is currently empty."
  }
  return message
}

function nowServing(arr){
  if (arr.length !== 0) {
    var person  = arr.shift()
    return `Currently serving ${person}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}
