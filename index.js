// accept two paramaters: the current line of people, along with the new person's name.
// The function should return a welcome message including the new person's position in line:
// "Welcome, Ada. You are number 1 in line.". 
//
// Notes
// 1) Should update current line (array) with the new person?
//    Does not say something in the description. Test check-it.
function takeANumber(arrCurr, strPerson) {
  var iPos = -1;
  if (strPerson !== '') {
    for (let i=0; i<arrCurr.length; i++) {
      if (arrCurr[i].toLowerCase() === strPerson.toLowerCase()) {
        iPos = i+1;                // convert 0-based to 1-based
        break;
      }
    }
    if (iPos == -1) {   // did not find it in the current list
      arrCurr.push(strPerson);
      iPos = arrCurr.length-1+1;      // convert 0-based to 1-based
    }
    return `Welcome, ${strPerson}. You are number ${iPos} in line.`;
  }
}

// accept the current line of people 
// return the first person in line and then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"
//
// Notes
// In the description does not mention "Currently serving xxx."
function nowServing(arrCurr) {
  var strRet = "There is nobody waiting to be served!";
  
  if (arrCurr.length > 0) {
    strRet = `Currently serving ${arrCurr[0]}.`;
    arrCurr.shift();
  }
  
  return strRet;
}

// accepts the current line of people
// returns the current line as a string;
// "The line is currently: 1. Ada, 2. Grace".
// If there is nobody in line, it should return "The line is currently empty."
function currentLine(arrCurr) {
  var strRet = "The line is currently: ";
  
  if (arrCurr.length>0) {
    for (let i=0; i<arrCurr.length; i++) {
      strRet += (i+1) + '. ' + arrCurr[i];
      if (i<arrCurr.length-1) {          // not for the last one
        strRet += ', ';
      }
    }
  }
  else {
    strRet = "The line is currently empty.";
  }
  
  return strRet;
}