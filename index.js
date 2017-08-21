var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing(katzDeliLine) {
  //create an empty array
  var lineOrder=[];
  //if the array with names is empty return
  if(katzDeliLine.length<=0) {
    return "There is nobody waiting to be served!";
    //else iterate throught names
  }else {
      for(var i=0;i<katzDeliLine.length;i++) {

        if(i>0) {
          break;
        }
        var name = katzDeliLine[i];
        lineOrder.push(`Currently serving ${katzDeliLine[i]}.`);
        katzDeliLine.shift();

      }
      return lineOrder[0];
  }
}

function currentLine(katzDeliLine) {
  var arr=[];
  if(katzDeliLine.length<=0) {
    return 'The line is currently empty.'
  }else {
    for(var i=0;i<katzDeliLine.length;i++) {
      arr.push(`${i+1}. ${katzDeliLine[i]}`);
    }
  }
  return 'The line is currently: ' + arr.join(", ");
}
