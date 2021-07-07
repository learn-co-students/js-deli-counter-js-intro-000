

var katzDeli = [];

function takeANumber(myArray, name) {

  myArray.push(name)

  return `Welcome, ${name}. You are number ${myArray.indexOf(name) + 1} in line.`;

}

function nowServing(nextLine){
  if(nextLine.length === 0){
  return "There is nobody waiting to be served!";
} else
var nextLine = nextLine.shift();
  return `Currently serving ${nextLine}.`;

}

function currentLine(lineArray){
   if(lineArray.length === 0){
    return 'The line is currently empty.';
   }else{
     var message = 'The line is currently:';
    var currentLineNames = '';

    for(var i = 0; i < lineArray.length; i++){
      var lineCounter = i + 1;
       if(lineCounter === lineArray.length){
         currentLineNames = currentLineNames + ` ${lineCounter}. ${lineArray[i]}`;
       }else{
         currentLineNames = currentLineNames + ` ${lineCounter}. ${lineArray[i]},`;
       }
     }
     return message + currentLineNames;
   }
 }
