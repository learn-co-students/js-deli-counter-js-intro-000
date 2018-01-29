function takeANumber(arr, name){
  arr.push(name);
  //return arr.length;
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length == 0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${arr.shift()}.`;
  }
}

function currentLine(arr) {
  var linestring = "";
  if (arr.length == 0) {
    linestring = 'The line is currently empty.';
  } else {
    linestring = 'The line is currently: ';
    for(var i = 0; i < arr.length; i++){
      linestring = linestring + `${i+1}. ${arr[i]}`;
      if (i < arr.length-1){
        linestring = linestring + ', ';
      }
    }
  }
  return linestring;
}