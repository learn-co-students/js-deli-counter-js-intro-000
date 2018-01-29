

function takeANumber(katzDeliLine, n){
        katzDeliLine.push(n)
      return `Welcome, ${n}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine){

    if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
  }

  else{
      if(deliLine.length > 0){
        var x = deliLine[0];
          deliLine.shift(x)
    return `Currently serving ${x}.`
    }
  }
}



function currentLine(katzDeliLine){

if(katzDeliLine.length === 0){
  return "The line is currently empty."
  }
  else{
    var output = "The line is currently: ";
      for(var i = 0; i < katzDeliLine.length; i++){
        if(katzDeliLine)
          output += `${i + 1}. ${katzDeliLine[i]}, `;
    }
      output = output.slice(0, -2);
        return output
  }

}
