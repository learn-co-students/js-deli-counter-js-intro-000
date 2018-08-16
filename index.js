var katzDeli = [];

function takeANumber(katzDeliLine, customerName)
{
  katzDeliLine.push(customerName);
  return "Welcome," + customerName +". You are number" + (katzDeliLine.length)+ "in line."
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  var current = katzDeliLine.shift();
  return "Currently serving" + current + ".";
}

function currentLine(katzDeliLine)
{
  var current = [];

  let i = 0;
  while(i < katzDeliLine.length)
{
  current.push(""+(i + 1)+ "." + katzDeliLine[i])
  i++;
}
}

if (katzDeliLine == 0)
{
  console.log  ("The line is currently empty.");
}
else {
  console.log ("The line is currently:" + current);
}
