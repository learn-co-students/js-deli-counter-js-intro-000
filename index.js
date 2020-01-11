function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${arr.shift()}.`;
  }
}


function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }else{
    var anwser = "The line is currently:"; 
    for(var i=0; i < line.length; i++){
      var nextPeson = ` ${i+1}. ${line[i]}${i < line.length -1 ? ',' : ''}`;
      anwser += nextPeson;
    } return anwser;
  }
}