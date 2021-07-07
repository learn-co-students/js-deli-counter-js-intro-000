function takeANumber( arr, name){
  let i=0;
  arr.push(name);
  i=arr.length;
  return `Welcome, ${name}. You are number ${i} in line.`;

}
function nowServing(arr){
  if(arr.length != 0){
    var person = arr.shift();
    return `Currently serving ${person}.`;
  }
  return "There is nobody waiting to be served!";
}
function currentLine( arr){
  var sent = `The line is currently: `;
  if( arr.length == 0){
    return `The line is currently empty.`
  }
  else {
    for(let i=0; i<arr.length ; ++i){
      if(i==0){
        sent = sent +`${i+1}. ${arr[i]}`;
      }
      else{
      sent = sent +`, ${i+1}. ${arr[i]}`;
    }
    }
  }
  return sent ;
}
