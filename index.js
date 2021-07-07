

function takeANumber(katzDeliLine, name){

  let i = katzDeliLine.length;
  katzDeliLine.push(name)




  return `Welcome, ${name}. You are number ${i+1} in line.`
}



function nowServing(katzDeliLine, name){
  let i = katzDeliLine.length;

  if (i ===0){
    return "There is nobody waiting to be served!"
  } else{

    var katzDeli = katzDeliLine.splice(0,1)

  }

  return `Currently serving ${katzDeli}.`;
}



function currentLine(katzDeliLine){
  var katzDeli = [];
  let i = katzDeliLine.length;

  if (i === 0){
    return "The line is currently empty."
  } else {
    let i = 1;
    //for(let i = 1; i<katzDeliLine.length; i++)

    katzDeli.push(`The line is currently: ${i}. ${katzDeliLine[0]}, ${i+1}. ${katzDeliLine[1]}, ${i+2}. ${katzDeliLine[2]}`)

  }
  return katzDeli;

}
