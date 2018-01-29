var katzDeliLine = [];

function takeANumber(array,name){

  if (!array.length){
    array.push(name);
    //console.log(array);
  }

  for (let i = 0; i < array.length; i++){
    if (array[i] == name){
      return(`Welcome, ${name}. You are number ${(i + 1)} in line.`);
    }
  }

  array.push(name);
  //console.log(array)
  return(`Welcome, ${name}. You are number ${array.length} in line.`);
}

function nowServing(array){

  if (!array.length){
    return("There is nobody waiting to be served!");
  }
  var next = array[0]
  array.shift();
  return(`Currently serving ${next}.`);

}

function currentLine(array){

  if (!array.length){
    return("The line is currently empty.")
  }

  var output = "The line is currently: ";

  for(let i = 0; i < array.length; i++){
    if (i == array.length - 1){
        output += `${i + 1}. ${array[i]}`;
    } else {
      output += `${i + 1}. ${array[i]}, `;
    }
  }

  return(output);
}


//3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine`
//is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently:
// 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`
