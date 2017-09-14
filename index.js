function takeANumber(arr, person){
  arr.push(person);
    return `Welcome, ${person}. You are number ${arr.indexOf(person)+1} in line.`;
}


function nowServing(arr){
  if(arr.length === 0){
    return 'There is nobody waiting to be served!';
  }

  return `Currently serving ${arr.shift()}.`;
}

function currentLine(arr){
  var line = '';
  if(arr.length === 0){
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i < arr.length; i++){
      line += `${i+1}. ${arr[i]}, `;
    }
    return `The line is currently: ${line}.`.slice(0, -3);
  }
}
