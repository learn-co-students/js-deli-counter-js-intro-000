function takeANumber(deliline, name) {
  return `Welcome ${name}. You are number ${deliline.indexOf(name) + 1}.`
}

function nowServing(deliline) {
  if (deliline[0] == null) {
    return "The line is currently empty.";
  }
  else {
    return deliline[0];
    deliline.shift();
  }
}
