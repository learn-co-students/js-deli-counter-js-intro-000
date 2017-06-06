var katzDeli = []
var katzDeliLine = ["Steven", "Blake", "Avi"]

function takeANumber(name) {let katzDeli = katzDeliLine; katzDeli.push(name);
                                          var sorszam = katzDeli.length;
                                          return `Welcome, ${name}. You are number ${sorszam} in line.`}
//function return people's position in line
//katzdeliline: current line of people

function nowServing() {if (katzDeliLine.length > 0) {return 'Currently serving ' + katzDeliLine[0] + '.'; 
                                                     katzDeliLine.shift(katzDeliLine[0])}
                        else {return 'There is nobody waiting to be served!'}}



function currentLine() {if (katzDeliLine.length > 0) {for (var i = 0; i < katzDeliLine.length; i++)
                                                          {var osszes = `${i+1}` + '. ' + katzDeliLine[i] + ',';
                                                           let osszes += osszes
                                                            return `The line is currently: ${osszes}`}} 
                        else {'The line is currently empty.'}}