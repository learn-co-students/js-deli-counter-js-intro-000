function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(theDeliLine) {

  if (theDeliLine.length > 0){

    var tempName = theDeliLine[0];
    theDeliLine.shift();
    return `Currently serving ${tempName}.`;
  }

  else {
    return "There is nobody waiting to be served!";
  }

//  return theDeliLine;
}



function currentLine(theDeliLine) {

  if (theDeliLine.length > 0){
    let line = 'The line is currently: ';


    for (let i = 0; i < theDeliLine.length; i++) {

      if (i== theDeliLine.length - 1) {
        line = line + (i+1) + `. ${theDeliLine[i]}`;
      }
      else {
        line = line + (i+1) + `. ${theDeliLine[i]}, `;
      }
    }
    return line;
  }

  else {
    return "The line is currently empty.";
  }
}
