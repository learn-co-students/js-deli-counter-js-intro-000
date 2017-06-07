var katzDeli = [];

function takeANumber(katzDeliLine, n){
  katzDeliLine.push(n)
  var m = katzDeliLine.length
  return `Welcome, ${n}. You are number ${m} in line.`
}

function nowServing(katzDeliLine, name){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var m = katzDeliLine.shift()
    return (`Currently serving ${m}.`);
  }
}

function currentLine(katzDeliLine){
  var basic = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    //for (var i=0; i<katzDeliLine.length; i++){
    //return katzDeliLine[i]
    //}
    var array = []
    var i = 0;
    while(i < katzDeliLine.length){
      array.push([i+1]+". " + katzDeliLine[i]);
      i++;
      }
  var customers = array.join(', ')
  return basic + customers

  }

}
