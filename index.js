
function takeANumber(array,name)
{
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array)
{
  if (array.length===0)
{
   return 'There is nobody waiting to be served!';
}
  else
{
  var name=array[0];
array.shift();
   return `Currently serving ${name}.`;
}
}

function currentLine(array)
{
  var str;
  if (array.length===0)
  {
    return "The line is currently empty.";

  }
  else
  {
str= "The line is currently: ";
  for (let j=0;j<array.length;j++)
  if (j===array.length-1)
  {
    str=str+`${j+1}. ${array[j]}`;
  }
  else
  {
    str=str+`${j+1}. ${array[j]}, `;
  }
}
return str;
}
