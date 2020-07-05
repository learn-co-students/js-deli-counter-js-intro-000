// the readmes and the test errors continue to increase in divergence...

function takeANumber(currentQueue,name){
  var queuePosition;

  currentQueue.push(name);
  queuePosition = currentQueue.length;

  return `Welcome, ${name}. You are number ${queuePosition} in line.`;
}

function nowServing (currentQueue){
  var nameInternal;

  if (currentQueue.length != 0){
    nameInternal = currentQueue[0];
    currentQueue.shift();

    return `Currently serving ${nameInternal}.`;
  }
  else if (currentQueue.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine (currentQueue){
  var stringInternal = "The line is currently";
  var queuePosition;

  if (currentQueue.length === 0){
    stringInternal = stringInternal + " empty.";

    return stringInternal;
  }
  else {
    stringInternal = stringInternal + ": ";
      for (var i=0; i<currentQueue.length; i++){ // AAAAAAAAAAAAAAAAAAAAAAAA
        queuePosition = i + 1;
        stringInternal = stringInternal + queuePosition + ". " + currentQueue[i]
        if (queuePosition < currentQueue.length){
          stringInternal = stringInternal + ", "; // commas only if not at end of line
        }
        // feels like there should be an else where a period is ended but that's not asked.
      }

    return stringInternal;
  }
}
