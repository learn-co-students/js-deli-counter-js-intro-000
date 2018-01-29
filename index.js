var katzDeliLine = [];
 
  function takeANumber(katzDeliLine, name){
   if(katzDeliLine.includes(name)===false){
   katzDeliLine.push(name);
   }
    for(var i=0; i<katzDeliLine.length; i++){
      return `Welcome, ${name}. You are number ` + (katzDeliLine.length) +" in line.";
  }
}

function nowServing(arr) {
     var name = arr.shift();
     if(arr.length===0){
    return "There is nobody waiting to be served!"; 
      }else{
     return `Currently serving ${name}.`;
      }
   }

   /**function currentLine(katzDeliLine){
      if(katzDeliLine.length===0){
        return "The line is currently empty.";
      } else {
        var startLine = "The line is currently: "
        for(var i=0; i<katzDeliLine.length; i++){
          startLine = startLine + (i+1) + ". " + katzDeliLine[i] + ", ";
        }
        return startLine;
      }
    }**/

    function currentLine(katzDeliLine){
    if(katzDeliLine.length===0){
      return "The line is currently empty.";
    } else {
      var startLine = "The line is currently: "
      for(var i=0; i<katzDeliLine.length; i++){
        startLine = startLine + (i+1) + ". " + katzDeliLine[i] + ", ";
        var newStartLine = startLine.slice(0, -2);
      }
      return newStartLine;
    }
  }
currentLine(katzDeliLine)   
   