function takeANumber(deliline, name) {
  deliline.push(name)
  return `Welcome, ${name}. You are number ${deliline.indexOf(name) + 1} in line.`
}

function nowServing(deliline) {
  if (deliline[0] == null) {
    return 'There is nobody waiting to be served!';
  }
  else {
    var announce = "Currently serving " + deliline[0] + ".";
    deliline.shift();
    return announce;
  }
}

function currentLine(deliline) {

  if (deliline.length == 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < deliline.length; i++) {
      deliline[i] = " " + `${i+1}. ${deliline[i]}`
    }
    return "The line is currently:" + deliline;
  }
}
