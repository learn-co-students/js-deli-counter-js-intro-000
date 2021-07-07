

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++){
    var results = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }

return results;
};

// function takeANumber(katzDeliLine, name){
//   katzDeliLine.push(name);
//   for (var i = 0; i < katzDeliLine.length; i++) {
//     var results = `Welcome, ${name}. You are number ${[i + 1]} in line.`
//
//   } return results;
// }

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  var current = katzDeliLine.shift();
  return "Currently serving " + current + ".";
}

// function nowServing(katzDeliLine){
//   for (var i = 0; i < katzDeliLine.length; i++){//does not need to have a loop
//       var first = katzDeliLine.shift();
//       return `Currently serving ${first}.`;
//   }
//   if (katzDeliLine.length < 1) {
//       return "There is nobody waiting to be served!";
//   }
// }

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  var results = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    var current = " " + [i + 1] + ". " + katzDeliLine[i];
    results.push(current);

  } return "The line is currently:" + results;
}
