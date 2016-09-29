function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name);
   let katzDeli = katzDeliLine.length;
   return 'Welcome, '+name+'. You are number '+ katzDeli + ' in line.';
 }

 function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    } else{
        var a = katzDeliLine.shift();
        return 'Currently serving '+a+'.';
    }
 }

function currentLine(line){
  var lineLen = line.length;
   var arr ='';
    if(lineLen === 0){
        return "The line is currently empty.";
    }else {
      for(let i=1; i < lineLen; i++){
         arr+=i+'. '+line[i-1]+', ';
      }
       var last = lineLen+'. '+line[lineLen-1];
       return "The line is currently: " + arr+last;
    }
}
