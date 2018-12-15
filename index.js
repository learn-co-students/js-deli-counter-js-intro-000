function takeANumber(array,name){
  array.push(name);
  var str ='';
  var i=0;
  while(i<array.length){
    str = `Welcome, ${name}. You are number ${i+1} in line.`;
    i++;
  }
  return str;
}

function nowServing(array){
  var str;
  if(array.length===0){
    str = `There is nobody waiting to be served!`;
  }
  else
  {
     str = `Currently serving ${array[0]}.`;
      array.shift();
   }

return str;
}

function currentLine(line){
  var str;
  if(line.length===0){
  str = `The line is currently empty.`;
  }
  else{
    str = `The line is currently:`;
    for(var i=0;i<line.length;i++){
      if(i===line.length-1){
        str += ` ${i+1}. ${line[i]}`
      }
      else{
        str += ` ${i+1}. ${line[i]},`;
      }
    }
  }
  return str;
}
