let katzDeli =[];
let katzDeliLine =[];

function takeANumber(line, name){
  line.push(name);
  let number = line.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(deliLine){
  if (deliLine.length>0) {
    let next = deliLine.shift();
    return `Currently serving ${next}.`;}
  else { return "There is nobody waiting to be served!"; }
  }

function currentLine(kline){
  if (kline.length > 0) {
    let line = [];
    for (let i = 0; i < kline.length; i+=1) {
      line.push(" " + (i+1) + ". " + kline[i]);
    }
    return `The line is currently:${line}`;
  } else {return "The line is currently empty.";}
}
