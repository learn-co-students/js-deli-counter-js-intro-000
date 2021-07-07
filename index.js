function takeANumber(array, katzDeli, number){
array.push(katzDeli);
return 'Welcome, ' + array[array.length-1]+ ". You are number " + array.length + " in line." ;
}

function nowServing(array ,deliLine){
array.unshift(deliLine);
array.splice(0,2);
return array.length === 0 ? "There is nobody waiting to be served!" : "Currently serving Steven." ;
}

function currentLine(array){
  return array.length === 0 ? "The line is currently empty." : "The line is currently: " +  [array.length-2]+ ". " + array[array.length-3] + ", " +[array.length-1] + ". " + array[array.length - 2] + ", " + array.length + ". " + array[array.length - 1];

}
