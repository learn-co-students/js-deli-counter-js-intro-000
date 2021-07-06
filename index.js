

function takeANumber(katzDeliLine, name){                                                          // creates function passes katzDeli and other persons name as parameters                                                                         // initializes katz deli to empty array //
          katzDeliLine.push(name);                                                                 // adds names to katzDeliLine array
          return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.");  // prints to screen
    }



function nowServing(katzDeliLine){                                                        // function nowServing passes in names from katzDeliLine
  if(katzDeliLine.length ===0){                                                           // if no one in in front of them print to screen
    return("There is nobody waiting to be served!");
  }
  else{                                                                                   // if someone IS in front of them print Currenty serving (replaced name)
      return ("Currently serving " + katzDeliLine.shift() +".");
  }
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return("The line is currently empty.")
    }
  else{
    var counter = [];
    for (var i =0; i<katzDeliLine.length; i++){
      counter.push(` ${i+1}. ${katzDeliLine[i]}`);
      }
    return ("The line is currently:" + counter);
  }
}
