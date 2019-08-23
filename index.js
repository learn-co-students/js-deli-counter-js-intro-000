function takeANumber(katzDeli, custname) {
  var pos = katzDeli.length + 1;
  var lit1 = "Welcome, " + custname + ". You are number " + pos + " in line.";
  katzDeli.push(custname);
  return lit1
}

function nowServing(katzDeli) {
  var lit2;
  if (katzDeli.length === 0) {
    lit2 = "There is nobody waiting to be served!"
  }
  else {
    lit2 = "Currently serving " + katzDeli[0] + '.';
    katzDeli.shift()
   }
  return lit2
}

function currentLine(katzDeli) {
  var lit3;
  if (katzDeli.length === 0) {
    lit3 = "The line is currently empty."
  }
  else {
    lit3 = "The line is currently: "
    var pos = 1
    for (let occ=0; occ<katzDeli.length; occ++) {
      if (pos > 1) {lit3 = lit3 + ', '}
      lit3 = lit3 + pos + '. ' + katzDeli[occ];
      pos = pos + 1
    }
  }
  return lit3
}
