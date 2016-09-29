
function takeANumber(katzDeliLine,katzDeli){

for ( var  i = katzDeliLine.length ;  katzDeliLine.length < i ; i++){
katzDeliLine.push(katzDeli)
}
return `Welcome, ${katzDeli}. You are number ${i} in line.`
}
