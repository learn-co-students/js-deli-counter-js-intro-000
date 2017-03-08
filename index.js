function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName);
    return ("'Welcome', + newName + 'You are number', + katzDeliLine.length, + 'in line.'")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === 0) {
    return "There is nobody waiting to be served!"
  }else {
    var servingName = katzDeliLine.shift()
    return("Now taking" + servingName + ".")
  }
}

function currentLine(katzDeliLine) {
  if (arr.length>0) {
    var ans = 'The line is currently: '
    for (var i = 0; i < arr.length-1;i+++) {
      ans += (i=1) + '. ' + arr[i] + ','
    }
    else if (i !== arr.length-1) {
      ans += (i+1) + '.' + arr[i]
    }
  }
  return ans
}
else {
  return "The line is currently empty"
}
