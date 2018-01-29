var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length > 0)
{
  return `Currently serving ${katzDeliLine.shift()}.`
}
else
{
  return `There is nobody waiting to be served!`
}
}

function currentLine(katzDeliLine) {
if (katzDeliLine.length > 0)
{
  var linedetail = " ";
  for (var i = 0; i < katzDeliLine.length; i++)
  {
    linedetail += (i+1) + ". " + katzDeliLine[i] + ", ";
  }
  linedetail = "The line is currently:" + linedetail;
  return linedetail.slice(0, linedetail.length - 2);
}
else {
  return "The line is currently empty."
}
}
