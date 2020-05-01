

//var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}



// var katzDeliLine = ['Ada','grace','Kent']
function nowServing(katzDeliLine){
  //var katzDeliLine = ['Ada','Grace','Kent'];

    if(katzDeliLine.length > 0){
          return 'Currently serving ' + katzDeliLine.shift() + '.';

}else{
          return"There is nobody waiting to be served!";
}
}



function currentLine(katzDeliLine){

var i = 'The line is currently: ' ;

    if(katzDeliLine.length > 0){
      for(var n = 0; n < katzDeliLine.length; n++){
            if(n === katzDeliLine.length -1){

            i += `${n+1}. ${katzDeliLine[n]}`;
      }else{
        i += `${n+1}. ${katzDeliLine[n]}, `;
      }
    }
      return i;
    }else{
          return 'The line is currently empty.';
    }
  }
