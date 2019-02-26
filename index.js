function takeANumber(line, newPerson) {
  var n = line.length + 1
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${n} in line.`
  }

  function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      var firstPerson =katzDeliLine[0]
      katzDeliLine.shift();
      return`Currently serving ${firstPerson}.`
    }
    }

function currentLine(katzDeli) {
  var list = []
  for (var i = 0; i < katzDeli.length; i++) {
    list.push(` ${i+1}. ${katzDeli[i]}`)
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently:" + list
      }
  }
