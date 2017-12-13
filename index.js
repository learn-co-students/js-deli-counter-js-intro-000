
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);

  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+" in line.";

}
function nowServing(line){

  if(line.length >0){
    return 'Currently serving ' +line.shift()+".";
    }
  else{
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line){
  var people = [];
  for (var i = 0; i < line.length; i++) {
  people.push(line[i]);
  
  }
    if(line.length >0){
      return 'The line is currently: 1. ' +people[0]+', 2. '+people[1]+', 3. '+people[2] ;
    }
    else{
      return "The line is currently empty."
    }

}
