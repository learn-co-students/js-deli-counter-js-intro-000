var katzDeli = [];
function takeANumber(katzDeli, name) {
  var num;
  katzDeli.push(name);
  for (var i = 0; i < katzDeli.length; i++) {
    if (katzDeli[i] == name) {
      num = i;
    }
  }
  return `Welcome, ${name}. You are number ${num+1} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(arr) {
  var str = "The line is currently: ";
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      str+= `${i+1}. ${arr[i]}, `;
    }
  } else {
    return "The line is currently empty.";
  }
  return str.slice(0, -2);;
}
