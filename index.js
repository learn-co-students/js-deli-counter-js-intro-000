function takeANumber(katzDeliLine, name)
{
  var firstName = name;
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  return `Welcome, ${firstName}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return `There is nobody waiting to be served!`;
  }
  else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
  }
  return `Currently serving ${name}.`;
}

function currentLine(deliLine)
{
  var line = new Array();
  let i = 0;
  while (i < deliLine.length)
  {
    line.push(` ` + [i+1] + `. ` + deliLine[i]);
    i++;
  }
  if (deliLine.length === 0)
  {
    return `The line is currently empty.`;
  }
return (`The line is currently:` + line);

}
