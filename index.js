var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line.";

}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length<=0)
    return "There is nobody waiting to be served!"

  else {
    var fp=katzDeliLine[0];
    katzDeliLine.shift();
      return "Currently serving "+fp+".";

  }
}

function currentLine(katzDeliLine)
{

  var st=[];
  var s="";
  if(katzDeliLine.length<=0)
    return "The line is currently empty."

  for(var i=0;i<katzDeliLine.length;i++)
  {
    st.push(i+1+". "+katzDeliLine[i]);
    if(i===katzDeliLine.length-1)
    s=s+st[i];
    else {
      s=s+st[i]+", ";
    }
  }
  return "The line is currently: "+s;
}
