var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
return  "Welcome, " + name + "." + " You are number " + (katzDeliLine.length) + " in line."
}
takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");


function nowServing(katzDeliLine) {
  var temp = katzDeliLine.shift();
  if(temp){
    return "Currently serving " + temp + ".";
  } else  {
    return "There is nobody waiting to be served!";
  }
}
nowServing(katzDeli);

//var katzDeli = ["ayumi", "fozzy", "kermie"];

function currentLine(line) {
  var temp;
  if (line.length > 0) {
    temp = "The line is currently:"
    for (var i = 0; i < line.length; i++){
     temp += " "+ (i+1) + ". " + line[i] + ",";
    }
    temp = temp.slice(0, -1);
    return temp
  } else {
    return "The line is currently empty."
  }
}

currentLine(katzDeli);
