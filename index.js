var katzDeliLine = [];
function takeANumber(arr, name) {
  arr.push(name)
  return 'Welcome, ' + name + '. You are number ' + arr.length + ' in line.'
}

function nowServing (arr){
  if (arr.length>0){
  return 'Currently serving ' + arr.shift() + '.';
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (arr){
  if (arr.length>0){
  var ans = 'The line is currently: '
  for (var i=0; i<arr.length;i++){
    if (i !== arr.length-1){
      ans += (i+1) + '. ' + arr[i] + ', '
      }
    else if (i === arr.length-1){
      ans += (i+1) + '. ' + arr[i]
    }
    }
  return ans
  }
  else{
  return "The line is currently empty."
  }
}