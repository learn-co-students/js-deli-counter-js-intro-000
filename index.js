var KatzDeliLine = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(KatzDeliLine) {
  if (KatzDeliLine.length > 0) {
    return `Currently serving ${KatzDeliLine.shift()}.` 
    } else { return `There is nobody waiting to be served!`
    }
  }
  
  function currentLine(KatzDeliLine) {
    var KatzDeli = [];
    if (KatzDeliLine.length > 0) {
      for (var i = 0; i < KatzDeliLine.length; i++)
      KatzDeli.push(` ${i+1}. ${KatzDeliLine[i]}`);
    } else {
      return `The line is currently empty.`;
    }
    return `The line is currently:${KatzDeli}`
  }
  