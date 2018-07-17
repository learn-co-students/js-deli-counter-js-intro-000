  var katzDeli = [];
  function takeANumber(katzDeliLine, newName){
    // 1st push new person to the katzDeliLine
    katzDeliLine.push(newName);
    // we can just return katzDeliLine.length and i will be the same, it's just easier to follow
    var newNumberInLine = katzDeliLine.length;
    // return newNumberInLine;
    return 'Welcome, '+`${newName}.`+' You are number '+ newNumberInLine + ' in line.'
  }
  function nowServing(katzDeliLine){
    var firstPerson = katzDeliLine.shift();// assigned var to the method so we can save the name of the first person we want to call it once only, because it removes the person every time we call shift
     //it returns the first name and changes the line by removing the first person
    if(firstPerson===undefined){// if the line is empty it will return undefined
      return "There is nobody waiting to be served!";
    }
    return `Currently serving ${firstPerson}.`;
    
  }
  function currentLine(katzDeliLine){
    //for ([initialization]; [condition]; [iteration]) {
    //[loopBody]
    
    var array =[];
    // we created var array because create an array, push the things we want, so we can join it later so we can make a String
    
    for (let i=1; i<=katzDeliLine.length; i++) {
      array.push(`${i}. ${katzDeliLine[i-1]}`);
    }
  //<= beacause we want keep going through the line until we hit the length(the end of the line) and we want to start it at 1 and make it more realistic to the pisition in line
    if(katzDeliLine.length===0){
      return "The line is currently empty."
    }
    else{
     return `The line is currently: ${array.join(", ")}`
    }
  }