var katzDeli = [];
var katzDeliLine = katzDeli.length;

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var sent = `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
  return sent;
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var customer = katzDeli.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }else {
    var sent = "The line is currently: ";
    for (var i = 0; i < katzDeli.length;i++){
      sent += `${i+1}. ${katzDeli[i]}${i !== katzDeli.length-1 ? ',' : ''} `;
    }
    return sent.trim();
  }
}
//(`"I am ${i} strange loop${i === 0 ? '' : 's'}"`)
