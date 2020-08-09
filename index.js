function takeANumber(array, name){
  array.push(name);
  var index = array.indexOf(name) + 1;
  return(`Welcome, ${name}. You are number ${index} in line.`);
};

function nowServing(array){
  var leng = array.length;
  if (leng != 0){
    var ser = array.shift();
    return (`Currently serving ${ser}.`);
  }
  else{
    return "There is nobody waiting to be served!";
  }
};

function currentLine(array){
  var leng = array.length;
  if (leng == 0){
    return "The line is currently empty.";
  }
  else{
    var string = "The line is currently: ";
    var i = 0;
    for (;i < leng-1; i++){
      string += `${i+1}. ${array[i]}, `;
    }
    string += `${i+1}. ${array[i]}`;
    return string;
  }
};
