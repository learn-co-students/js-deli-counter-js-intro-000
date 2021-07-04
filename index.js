function takeANumber(arr, name) {
    arr.push(name);
    console.log(arr);
    return "Welcome, " + name + "." + " You are number " + (arr.indexOf(name) + 1) + " in line.";
}

function nowServing(arr, name) {
    if (arr.length > 0) {
        return "Currently serving " + arr.shift() +".";
    } else {
        return "There is nobody waiting to be served!";
    }
}


/*
var katzDeliLine =  ["Ada", "Grace", "Nazim"];

function currentLine(arr) {
    var phrase = "The line is currently: ";
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
          phrase += " " + Number(i)+1 + ". " + arr[i] + ",";
      }

      return phrase;

    } else {
      return "The line is currently empty.";
    }
}

currentLine(katzDeliLine);

*/

function currentLine(arr) {
    var phrase = "The line is currently:";
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
            phrase += " " + Number(i+1) + ". " + arr[i] + ",";
      }

      return phrase.slice(0,(phrase.length)-1);

    } else {
      return "The line is currently empty.";
    }
}
