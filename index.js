var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + (array.indexOf(name)+1) + " in line.";

}

function nowServing(array) {
  if (array.length != 0) {
    return "Currently serving " + array.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: "
    for(var i = 0; i < array.length; i++) {
      //var line = "The line is currently: "
      if (i === array.length-1) {
        line +=  `${(i+1)}. ${array[i]}`;
      } else {
        line +=  `${(i+1)}. ${array[i]}, `;
    }
  }
    return line;

  }
}
