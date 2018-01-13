var katzDeliLine =[];

var takeANumber = (katzDeliLine,name) =>{
  katzDeliLine[katzDeliLine.length] =name;;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = (katzDeliLine) =>{
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  var serving = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${serving}.`;
}

var currentLine =(arr) =>{
  if(!arr.length){
    return "The line is currently empty.";
  }
  var str="The line is currently: ";
  arr.forEach((el,index) =>{str += `${index+1}. ${el}, `;})
  return str.slice(0,-2);
}
