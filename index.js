//var katzDeli = [];

function takeANumber(katzDeli, person){
   katzDeli.push(person);
   return `Welcome, ${person}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length < 1){
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katzDeli.shift()}.`;

}

function currentLine(line){
  if (line.length < 1){
    return 'The line is currently empty.';
  }
  else{

    var msg = `The line is currently: `;
    for(let i = 0; i < line.length; i++){

       msg += `${i+1}. ${line[i]}`;

       if (i < (line.length-1))
        msg += ', ';

    }
    return msg;

  }

}
