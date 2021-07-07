
var katzDeli = [];
function takeANumber(katzDeli,name) {
    katzDeli.push(name);
    return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}


function nowServing(katzDeli) {
    if (katzDeli.length<1) {
      return("There is nobody waiting to be served!");
    } else {
      return(`Currently serving ${katzDeli.shift()}.`);
    }
}

function currentLine(katzDeli) {
  if (katzDeli.length<1) {
    return("The line is currently empty.");
  }  else {
    var status = "The line is currently: ";
    for (let i = 0; i<(katzDeli.length); i++) {
      status = status + (i+1).toString() + ". " + katzDeli[i];
      if (katzDeli.length>1 & i<(katzDeli.length-1)) {
        status = status + ", ";
      }
    }
    return(status);
  }
}
