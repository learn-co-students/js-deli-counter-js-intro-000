

function takeANumber(katzDeliLine,name)
{
  var katzDeli = [];
  katzDeliLine.push(name)
  return ("Welcome, "+ name +". You are number "+katzDeliLine.length+" in line.")

}
function nowServing(katzDeliLine)
{
  if(katzDeliLine.length>0)
    {
      var nextInLine = katzDeliLine.shift()
      return ("Currently serving "+nextInLine+".")
    }
    else
    {
      return "There is nobody waiting to be served!"
    }
}
function currentLine(katzDeliLine)
{
  var announcement = "The line is currently: "
  if (katzDeliLine.length===0)
  {
    return ("The line is currently empty.")
  }
  else
  {
    for (var i=0;i<katzDeliLine.length-1;i++)
    {
      announcement = announcement  +(i+1)+". "+katzDeliLine[i]+", "
    }
    announcement = announcement + (i+1)+". "+ katzDeliLine[i]
    return announcement
  }
}
