var katzDeliLine = [];  //decalre array variable

function takeANumber(katzDeliLine, name){   //function that accepts 2 arguments
  katzDeliLine.push(name);  //add name to array
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line.";
  //return message for the name and the last position number in array
}

function nowServing(x){
  if (x.length === 0){  //if last position number in array equels 0, meaning it is empty
    return "There is nobody waiting to be served!";
  }else{
    var name = x[0];  //needs clarification
    x.splice(0, 1);   //needs clarification
    return "Currently serving " + name + "."
  }
}

function currentLine(x){
  var line = [];   //variable line is an array
  if (x.length === 0){  //if last position number in array equels 0, meaning it is empty
    return "The line is currently empty."
  } else {
    for(var i = 0; i < x.length; i++){
      //for loop, if i = O (place in line) < last postition in array (number), it increments by 1 and  through numbers in array and returns array
      line += (i + 1) + ". " + x[i] + ", "
    }
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line;
  }
}
