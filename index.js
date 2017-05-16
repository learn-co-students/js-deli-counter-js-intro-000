function takeANumber(array, name){
  var spot = array.length + 1;
  array.push(name); 
  return `Welcome, ${name}. You are number ${spot} in line.`
}

function nowServing(array){
  if (array.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  var response = "The line is currently";
  var tailer; 
  if (array.length < 1){
    tailer = " empty.";
    return response + tailer;
   } else {
     var names = [];
     array.forEach(function(name, idx){
       names.push(`${idx + 1}. ${name}`);
     });
      tailer = ": " + names.join(", ");
   }
   return response + tailer;
}