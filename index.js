  /*var katzDeliLine = [];
  var number = 0;

function takeANumber (katzDeliLine, name){
 katzDeliLine.push(name)

 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  for(var i = 0; i < katzDeli.length; i++);
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

var line = [];
function currentLine(katzDeli) {
for (var i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
*/

var takeANumber = function (katzDeli, newCustomer) {
  if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeli.length + " in line."
}

function nowServing (katzDeliLine) {
   if(katzDeliLine.length===0) {
   return 'There is nobody waiting to be served!';
}
   var customer = katzDeliLine.shift();
   return "Currently serving " + customer + ".";
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var customerAndNumber = [];
   for (var i=0; i<katzDeliLine.length; i++) {
   customerAndNumber.push(i+1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
