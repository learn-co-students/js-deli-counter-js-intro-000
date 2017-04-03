

function takeANumber(array, name){
  var newArray = array;
  var welcomeString = "";
  newArray.push(name);
  
  if(newArray.length === 1){
    welcomeString = `Welcome, ${newArray[0]}. You are number 1 in line.`;
    return welcomeString;
  } else if (newArray.length > 1) {
    for(var i = 0; i < newArray.length; i++){
      if(newArray[i] === name){
        welcomeString = `Welcome, ${newArray[i]}. You are number ${i + 1} in line.`;
        return welcomeString;
      }
    }
  } 
}

function nowServing(array){
  var result = array;
  var announcement = "";
  if(result.length === 0){
    announcement += 'There is nobody waiting to be served!';
    return announcement;
  }else {
    var person = result.shift();
    announcement += `Currently serving ${person}.`;
    return announcement;
  }
}

function currentLine(array){
  var lineWaiting = array;
  var result = "The line is currently: "
  if(lineWaiting.length === 0){
    return "The line is currently empty.";
  }else {
    for(var i=0; i < lineWaiting.length; i++){
      if(i + 1 === lineWaiting.length){
        result += `${i + 1}. ${lineWaiting[i]}`
        return result;
      } else{
        result += `${i + 1}. ${lineWaiting[i]}, `
      }
    }
  }
}