var katzDeli = [];
function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  var n = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + n + " in line.";
}
function nowServing(katzDeliLine)
{
  var n = katzDeliLine.length;
  var name;
  if(n === 0)
  {
    return("There is nobody waiting to be served!")
  }
    else{
      name = katzDeliLine.shift();
      return ("Currently serving " + name + ".");
    }
}
function currentLine(katzDeliLine)
{
  var n = katzDeliLine.length;
  var a = [];
  if(n === 0)
  {
    return("The line is currently empty.")
  }
     else{
       for(let i = 0; i < n; i++)
       {
         a[i] = " " +(i+1)+  ". " +katzDeliLine[i];
       }
       
       return "The line is currently:" +a;
     }
     
     
}