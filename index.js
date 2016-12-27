var katzDeliLine=[]
function takeANumber(katzDeliLine,name) {katzDeliLine.push(name); return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`}
function nowServing (katzDeliLine) {if (katzDeliLine.length>0) {var current=katzDeliLine.shift(); return `Currently serving ${current}.` } else {return "There is nobody waiting to be served!"}}
function currentLine(line) {  var announcement={};
                                     if (line.length<1) {
                                         announcement=`The line is currently empty.`;
                                                }
                                    else {announcement=`The line is currently:`; 
                                         for (var i = 0; i<line.length;i++)
                                   
                                     
                                               {
                                                announcement=announcement+` ${i+1}. ${line[i]}`;
                                       
                                                if (i<line.length-1) {announcement=announcement+`,`}
                                         }};
                                   
                                  
                                    return announcement
                                  }