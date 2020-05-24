function takeANumber(katzDeliLine, newPersonInLine)
{
  let newPersonCurrentLine=`Welcome, ${newPersonInLine}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(newPersonInLine);
  console.log(newPersonCurrentLine)
  return newPersonCurrentLine
}

function nowServing(katzDeliLine)
{
if (katzDeliLine.length===0)
{
  return 'There is nobody waiting to be served!';
}
else {
  let selectPerson=katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${selectPerson}.`
}
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length===0)
  {
    return 'The line is currently empty.';
  }
  else {
    let queueName='The line is currently:';
    for (let i=0;i<katzDeliLine.length;i++)
    {
      queueName=`${queueName} ${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1?'':','}`
    }
    console.log(queueName)
    return queueName
  }
}
