var katzDeli = []

function takeANumber (katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}
