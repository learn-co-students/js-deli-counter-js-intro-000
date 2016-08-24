

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
    // add new name to end of array
    katzDeliLine.push(name);

    // create variable for person's place in line
    var queuePos = katzDeliLine.length;
    //return position in line
    return "Welcome, " + name + ". You are number " + queuePos + " in line.";
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length <= 0){
    return "There is nobody waiting to be served!";

  } else{
        var currentlyServing = katzDeliLine[0];
        katzDeliLine.shift();

    return "Currently serving " + currentlyServing + ".";
  }
}


function currentLine(katzDeliLine){
    if (katzDeliLine.length <= 0){
        return "The line is currently empty."
    } else{
        var namePositions = [];
            var i = 0;
            katzDeliLine.forEach(function(person, index){
                namePositions.push(" " + (i + 1) + ". " + person);
                i += 1;
            })
      return ("The line is currently:" + namePositions.toString());
    }
}
