function takeANumber (katzDeliLine, name) {
    var num = katzDeliLine.length + 1;
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${num} in line.`;
};

function nowServing (array) {
  if (array[0] == null) return "There is nobody waiting to be served!";
  else {
  return `Currently serving ${array.shift()}.`;
}
  array = array.shift();
};

function currentLine (array) {
  if (array[0] == null) return "The line is currently empty.";
  else {
    var text = "The line is currently: "
    for (var i = 0; i <array.length; i++) {
      if (i == array.length - 1)
        text += +(i + 1) + ". " + array[i];
      else
        text += +(i + 1) + ". " + array[i] + ", ";
    }
    return text;
  }
};
